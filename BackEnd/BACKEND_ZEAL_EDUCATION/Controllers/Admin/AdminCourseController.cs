using Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileSystemGlobbing;
using Models.Entities;
using Scholar_model = Models.Entities.Scholar;
using Models.Models.Request.CourseRequest;
using Models.Models.Response.CourseResponse;
using static System.Net.Mime.MediaTypeNames;
using Models.Models.Response.CourseRegisterResponse;
using static System.Runtime.InteropServices.JavaScript.JSType;
using Models.Models.Response;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
    public class AdminCourseController : BaseController<AdminCourseController>
    {
        public AdminCourseController(ProjectSem3Context dbContext,
            ILogger<AdminCourseController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetListCourse([FromQuery] int? status = null)
        {
            var courseList = _dbContext.Courses.Where(m => (m.Status == status || status == null)).OrderByDescending(m => m.Id);
            if (courseList == null)
                return NotFound(Message.NOT_FOUND_COURSE);
            return Ok(courseList);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetDetail(int id)
        {
            var course = _dbContext.Courses.Find(id);
            if (course == null) return NotFound(Message.NOT_FOUND_COURSE);
            var courseScholar = from sc in _dbContext.ScholarCourses
                                join scholar in _dbContext.Scholars on sc.ScholarId equals scholar.Id
                                where sc.CourseId == id
                                select scholar;
            var result = new CourseDetailViewModel
            {
                Id = id,
                Name = course.Name ?? null,
                CourseCode = course.CourseCode ?? null,
                TuitionFees = course.TuitionFees ?? null,
                CourseType = course.CourseType ?? null,
                Descreption = course.Descreption ?? "",
                CreatedDate = course.CreatedDate ?? null,
                UpdatedDate = course.UpdatedDate ?? null,
                Image = course.Image ?? "",
                Scholars = courseScholar.ToList() ?? new List<Scholar_model>(),
            };
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CourseCreateModel model)
        {
            var courseExist = _dbContext.Courses.FirstOrDefault(m => m.CourseCode == model.CourseCode);
            if (courseExist != null) return BadRequest(Message.UCOURSE_CODE_ALREADY_EXIST);
            var data = new Course
            {
                CourseCode = model.CourseCode,
                CourseType = model.CourseType,
                Descreption = model.Descreption,
                CreatedBy = "System",
                CreatedDate = DateTime.Now,
                TuitionFees = model.TuitionFees,
                Status = 1,
                Name = model.Name,
                Image = model.Image,
            };
            _dbContext.Courses.Add(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("{id:int}")]
        public IActionResult Edit(int id, CourseCreateModel model)
        {
            var course = _dbContext.Courses.Find(id);
            if (course == null) return NotFound(Message.NOT_FOUND_COURSE);
            course.Name = model.Name;
            course.CourseCode = model.CourseCode;
            course.CourseType = model.CourseType;
            course.Descreption = model.Descreption;
            course.TuitionFees = model.TuitionFees;
            course.Status = model.Status;
            course.Image = model.Image;
            course.UpdatedBy = "System";
            course.UpdatedDate = DateTime.Now;
            _dbContext.Courses.Update(course);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var course = _dbContext.Courses.Find(id);
            if (course == null) return NotFound(Message.NOT_FOUND_COURSE);
            course.Status = 0;
            _dbContext.Courses.Update(course);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ?  Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }


        //0 - refused
        //3 - pending
        //1 - accepted
      
        [HttpPut]
        public IActionResult ConfirmedOrRefusedCreate(ConfirmedRegisterCourse model)
        {
            var data = _dbContext.ScholarCourses.FirstOrDefault(m => m.Id == model.Id);
            if (data == null)
            {
                return NotFound(Message.NOT_FOUND_DATA);
            }
            data.Status = model.Status;
            _dbContext.ScholarCourses.Update(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpGet]
        public IActionResult GetListCourseRegister() 
        {
            var result = _dbContext.ScholarCourses.Where(m => m.Status == 3).Select(m => 
                new ScholarCourseRegisterViewable
                {
                    Id= m.Id,
                    CourseId= m.CourseId,
                    Status= m.Status,
                    CreatedDate= m.CreatedDate,
                    ScholarId= m.ScholarId,
                    Scholar = m.Scholar != null ? m.Scholar.Account : null,
                    Course= m.Course,
                    Purchased= m.Purchased,
                    TuitionFees = m.TuitionFees
                }).ToList();
            return Ok(result);
        }

    }
}
