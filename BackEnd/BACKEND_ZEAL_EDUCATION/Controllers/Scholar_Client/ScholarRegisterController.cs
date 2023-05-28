
using Common;
using Scholar_model = Models.Entities.Scholar;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;
using Models.Models.Request.RegisterRequest;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Scholar_Client
{
    public class ScholarRegisterController : BaseController<ScholarRegisterController>
    {
        public ScholarRegisterController(ProjectSem3Context dbContext,
            ILogger<ScholarRegisterController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        public class ScholarCourseCode
        {
            public int courseId { get; set; }
            public int scholarId { get; set; }
        }

        //1 - active, 0 - unactive, 2 - locked

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Create([FromBody] ScholarRegisterModel model)
        {
            var checkUsername = _dbContext.Accounts.FirstOrDefault(m => m.Username == model.Username);
            if(checkUsername != null)
            {
                return BadRequest(Message.USERNAME_MATCHING);
            }
            var salt = Guid.NewGuid().ToString();
            var passHash = Ultils.ComputeSha256Hash(model.Username, salt, model.Password);
            var data = new Account
            {
                Username = model.Username,
                Password = passHash,
                Salt = salt,
                Name = model.Name,
                Age = model.Age,
                Gender = model.Gender,
                Address = model.Address,
                Descreption = model.Descreption,
                Email= model.Email,
                PhoneNumber = model.PhoneNumber,
                CreatedDate = DateTime.Now,
                Status = 1,
                RoleId = 3,
                DateOfbirth = model.DateOfbirth
            };
            _dbContext.Accounts.Add(data);
            var eff = _dbContext.SaveChanges();

            var accountCreated = _dbContext.Accounts.OrderByDescending(m => m.Id).FirstOrDefault();
            if (accountCreated != null)
            {
                var scholar = new Scholar_model
                {
                    AccountId = accountCreated.Id
                };
                _dbContext.Scholars.Add(scholar);
                eff = _dbContext.SaveChanges();
            }

            return eff > 0 ? Ok("Success") : BadRequest("Failed");
        }

        [HttpPost]
        public IActionResult CourseRegister([FromBody] ScholarCourseCode model)
        {
            var course = _dbContext.Courses.Where(m => m.Id == model.courseId).FirstOrDefault();
            var scholar = _dbContext.Scholars.Where(m => m.Id == model.scholarId).FirstOrDefault();
            var courseRegister = _dbContext.ScholarCourses.FirstOrDefault(m =>
                            m.ScholarId == model.scholarId && m.CourseId == model.courseId);
            if (courseRegister != null) return BadRequest(Message.COURSE_HAS_REGISTER);
            if(course ==null || scholar == null)
            {
                return NotFound(Message.NOT_FOUND_DATA);
            }
            else
            {
                var data = new ScholarCourse
                {
                    Status = 3,
                    TuitionFees = course?.TuitionFees,
                    CourseId = course?.Id,
                    ScholarId = scholar?.Id,
                    CreatedDate = DateTime.UtcNow
                };
                _dbContext.ScholarCourses.Add(data);
            }
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("{id:int}")]
        public IActionResult CourseCancel([FromRoute] int id)
        {
            var username = getCurrentUsernameLogin();
            var scholarAccount = _dbContext.Accounts.FirstOrDefault(m => m.Username == username && m.RoleId == 3);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholar = _dbContext.Scholars.FirstOrDefault(m => m.AccountId == scholarAccount.Id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholarCourse = _dbContext.ScholarCourses.FirstOrDefault(m => m.CourseId == id && m.ScholarId == scholar.Id);
            if (scholarCourse == null) return NotFound(Message.NOT_FOUND_DATA);
            if (scholarCourse.Status == 1) return Conflict(Message.COURSE_HAS_REGISTER);
            _dbContext.ScholarCourses.Remove(scholarCourse);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);

        }
    }
}
