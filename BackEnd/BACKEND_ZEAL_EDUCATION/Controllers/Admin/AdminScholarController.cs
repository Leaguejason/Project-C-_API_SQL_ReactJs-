using Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
using Models.Models.Request.ScholarRequest;
using Models.Models.Response.ScholarRequest;
using Models.Models.Response.ScholarResponse;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
    public class AdminScholarController : BaseController<AdminScholarController>
    {
        public AdminScholarController(ProjectSem3Context dbContext,
            ILogger<AdminScholarController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetListScholar([FromQuery] int? status = null)
        {
            var result = _dbContext.Scholars.Where(m => (m.Account!.Status == status || status == null))
                .Select(m => new ScholarBaseViewable
                        {
                            Id = m.Id,
                            Name = m.Account != null ? m.Account.Name : "",
                            Age = m.Account != null ? m.Account.Age : null,
                            Gender = m.Account != null ? m.Account.Gender : "",
                            Email = m.Account != null ? m.Account.Email : "",
                            PhoneNumber= m.Account != null ? m.Account.PhoneNumber : "",
                            Address = m.Account != null ? m.Account.Address : "",
                            Status = m.Account != null ? m.Account.Status : null,
                            Descreption = m.Account != null ? m.Account.Descreption : "",
                            Batch = m.Batch,
                            Faculty = m.Faculty,
                        });
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetDetail([FromRoute]int id)
        {
            var scholar = await _dbContext.Scholars.FindAsync(id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholarAccount = _dbContext.Accounts.Find(scholar.AccountId);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholarCourses =  from sc in _dbContext.ScholarCourses
                        join cs in _dbContext.Courses on sc.CourseId equals cs.Id
                        where sc.ScholarId == id
                        select new ScholarCourseViewable
                        {
                            Id = cs.Id,
                            Name = cs.Name,
                            CourseCode = cs.CourseCode,
                            CourseType = cs.CourseType,
                            Descreption = cs.Descreption,
                            Purchased = sc.TuitionFees,
                            AssignmetPoint = sc.AssignmetPoint,
                            Status = sc.Status,
                            Image = cs.Image,
                            TestPoint = sc.TestPoint,
                        };
            var scholarExam = from se in _dbContext.ScholarExams
                          join ex in _dbContext.Exams on se.ExamId equals ex.Id
                          where se.ScholarId == id
                          select new ScholarExamViewable
                          {
                              Id = ex.Id,
                              Status = se.Status,
                              StartDate = ex.StartDate,
                              EndDate = ex.EndDate,
                              Point = se.Point,
                              ExamName = ex.Course != null ? ex.Course.Name : "",
                              ExamCode = ex.ExamCode,
                              Descreption = ex.Descreption,
                          };
            
            var scholarViewable = new ScholarDetalViewable
            {
                Id = scholar.Id,
                Status = scholarAccount.Status,
                Name = scholarAccount.Name,
                Age = scholarAccount.Age,
                Email = scholarAccount.Email,
                PhoneNumber = scholarAccount.PhoneNumber,
                Address = scholarAccount.Address,
                Gender  = scholarAccount.Gender,
                Descreption = scholarAccount.Descreption,
                DateOfbirth = scholarAccount.DateOfbirth,
                Batch = scholar.Batch,
                Faculty= scholar.Faculty,
                CourseList = scholarCourses.ToList(),
                Exams = scholarExam.ToList(),
            };
            return Ok(scholarViewable);
        }

        [HttpPut("{id:int}")]
        public IActionResult EditScholar([FromRoute] int id,[FromBody] ScholarBaseModel scholarBase)
        {
            var scholar = _dbContext.Scholars.Find(id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholarAccount = _dbContext.Accounts.Find(scholar.AccountId);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            scholarAccount.Status = scholarBase.Status;
            scholarAccount.Address = scholarBase.Address;
            scholarAccount.Gender = scholarBase.Gender;
            scholarAccount.Name = scholarBase.Name;
            scholarAccount.Age = scholarBase.Age;
            scholarAccount.DateOfbirth = scholarBase.DateOfbirth;
            scholarAccount.Descreption = scholarBase.Descreption;

            _dbContext.Accounts.Update(scholarAccount);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var scholar = _dbContext.Scholars.Find(id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholarAccount = _dbContext.Accounts.Find(scholar.AccountId);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);

            scholarAccount.Status = 0;
            _dbContext.Accounts.Update(scholarAccount);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }
    }
}
