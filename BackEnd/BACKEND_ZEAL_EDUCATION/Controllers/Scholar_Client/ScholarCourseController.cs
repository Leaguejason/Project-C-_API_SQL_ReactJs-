using System;
using BACKEND_ZEAL_EDUCATION.Controllers.Admin;
using Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;
using Models.Models.Response;
using Models.Models.Response.CourseResponse;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Scholar_Client
{
	public class ScholarCourseController : BaseController<ScholarCourseController>
    {
        public ScholarCourseController(ProjectSem3Context dbContext,
            ILogger<ScholarCourseController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetListCourse([FromQuery] string name = "")
        {
            var courseList = _dbContext.Courses.Where(m => m.Status == 1 && (m.Name != null && m.Name.ToLower().Contains(name.ToLower()) || name == ""));
            if (courseList == null)
            {
                return NotFound(Message.NOT_FOUND_DATA);
            }
            return Ok(courseList);
        }

        [HttpGet("{id:int}")]
        [AllowAnonymous]
        public IActionResult GetDetail(int id)
        {
            var course = _dbContext.Courses.Find(id);
            if (course == null) return NotFound(Message.NOT_FOUND_COURSE);
            var courseScholar = from sc in _dbContext.ScholarCourses
                                join scholar in _dbContext.Scholars on sc.ScholarId equals scholar.Id
                                where sc.CourseId == id
                                select scholar;
            var result = new ScholarCourseDetailModel
            {
                Name = course.Name ?? null,
                CourseCode = course.CourseCode ?? null,
                TuitionFees = course.TuitionFees ?? null,
                CourseType = course.CourseType ?? null,
                Descreption = course.Descreption ?? "",
                Image = course.Image ?? "",
                Quantity = courseScholar.Count()
            };
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        [AllowAnonymous]
        public IActionResult GetFeedbackByCourse([FromRoute] int id) 
        {
            var feedbacks = _dbContext.FeedBacks.Where(m => m.CourseId == id).Select(m => 
                new FeedbackViewable
                {
                    Id = m.Id,
                    Title= m.Title,
                    Message= m.Message,
                    CreateBy = m.CreateBy,
                    CreateDate= m.CreateDate,
                    Account = m.CreateByNavigation != null ? m.CreateByNavigation.Account : null,
                });
            return Ok(feedbacks);
        }
    }
}

