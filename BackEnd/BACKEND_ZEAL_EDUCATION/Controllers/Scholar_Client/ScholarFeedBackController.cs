
using Common;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;
using Models.Models.Request;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Scholar_Client
{
    public class ScholarFeedBackController : BaseController<ScholarFeedBackController>
    {
        public ScholarFeedBackController(ProjectSem3Context dbContext,
            ILogger<ScholarFeedBackController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetMyFeedBack()
        {
            var username = getCurrentUsernameLogin();
            var scholarAccount = _dbContext.Accounts.FirstOrDefault(m => m.Username == username);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholar = _dbContext.Scholars.FirstOrDefault(m => m.AccountId == scholarAccount.Id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var data = _dbContext.FeedBacks.Where(m => m.CreateBy == scholar.Id);
            return Ok(data);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetDetailMyFeedBack([FromRoute] int id)
        {
            var username = getCurrentUsernameLogin();
            var scholarAccount = _dbContext.Accounts.FirstOrDefault(m => m.Username == username);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholar = _dbContext.Scholars.FirstOrDefault(m => m.AccountId == scholarAccount.Id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var data = _dbContext.FeedBacks.FirstOrDefault(m =>
                        (m.Id == id && m.CreateBy == scholar.Id));
            if (data == null) return NotFound(Message.NOT_FOUND_FEEDBACK);
            return Ok(data);
        }

        [HttpPost]
        public IActionResult SendFeedback([FromBody] SendFeedbackModel model)
        {
            var username = getCurrentUsernameLogin();
            var scholarAccount = _dbContext.Accounts.FirstOrDefault(m => m.Username == username);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholar = _dbContext.Scholars.FirstOrDefault(m => m.AccountId == scholarAccount.Id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);

            var feedback = new FeedBack
            {
                CreateDate = DateTime.Now,
                CourseId = model.CourseId,
                CreateBy = scholar.Id,
                Message = model.Message,
                Title = model.Title,
            };
            _dbContext.FeedBacks.Add(feedback);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("{id:int}")]
        public IActionResult EditMyFeedBack([FromRoute] int id, [FromBody] EditMyFeedBackmodel model)
        {
            var username = getCurrentUsernameLogin();
            var scholarAccount = _dbContext.Accounts.FirstOrDefault(m => m.Username == username);
            if (scholarAccount == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var scholar = _dbContext.Scholars.FirstOrDefault(m => m.AccountId == scholarAccount.Id);
            if (scholar == null) return NotFound(Message.NOT_FOUND_SCHOLAR);
            var data = _dbContext.FeedBacks.FirstOrDefault(m =>
                        (m.Id == id && m.CreateBy == scholar.Id));
            if (data == null) return NotFound(Message.NOT_FOUND_FEEDBACK);
            data.Title = model.Title;
            data.Message = model.Message;
            _dbContext.FeedBacks.Update(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }
    }
}
