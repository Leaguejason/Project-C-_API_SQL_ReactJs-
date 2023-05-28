
using Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
using Models.Models.Response;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
    public class AdminFeedBackController : BaseController<AdminFeedBackController>
    {
        public AdminFeedBackController(ProjectSem3Context dbContext,
            ILogger<AdminFeedBackController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var result = _dbContext.FeedBacks.Select(m => new FeedbackViewable
            {
                Id = m.Id,
                CreateDate= m.CreateDate,
                Account = m.CreateByNavigation != null ? m.CreateByNavigation.Account : null,
                Message= m.Message,
                Course = m.Course 
            });
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetDetail(int id) 
        {
            var feedback = _dbContext.FeedBacks.Where(x => x.Id == id).Select(m => 
            new FeedbackViewable
            {
                Id = m.Id,
                Title = m.Title,
                Message= m.Message,
                Account = m.CreateByNavigation != null ? m.CreateByNavigation.Account : null,
                CreateDate= m.CreateDate,
            });
            if (feedback == null) return BadRequest(Message.NOT_FOUNT_FEEDBACK);
            return Ok(feedback);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete([FromRoute] int id) 
        {
            var data = _dbContext.FeedBacks.FirstOrDefault(m => m.Id == id);
            if (data == null) return NotFound(Message.NOT_FOUND_FEEDBACK);
            _dbContext.FeedBacks.Remove(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }
    }
}
