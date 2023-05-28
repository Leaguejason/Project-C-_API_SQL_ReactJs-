using Common;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;
using Models.Models.Request;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
    public class AdminEventController : BaseController<AdminEventController>
    {
        public AdminEventController(ProjectSem3Context dbContext,
            ILogger<AdminEventController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetListEvent([FromQuery] int? status = null)
        {
            var result = _dbContext.Events.Where(m => (m.Status == status || status == null));
            if (result == null)
                return NotFound(Message.NOT_FOUND_EVENT);
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public IActionResult Detail([FromRoute] int id) 
        { 
            var result = _dbContext.Events.Find(id);
            if (result == null) return NotFound(Message.NOT_FOUND_EVENT);
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create([FromBody] EventCreateModel model)
        {
            if (model.StartDate > model.EndTime) return BadRequest(Message.INVALID_END_TIME);
            var newEvent = new Event
            {
                Name = model.Name,
                CreatedDate = DateTime.Now,
                CreatedBy = "System",
                Description = model.Description,
                EndTime = model.EndTime,
                Location = model.Location,
                StartDate = model.StartDate,
                Status = model.Status,
            };
            _dbContext.Events.Add(newEvent);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ?  Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("{id:int}")]
        public IActionResult Edit([FromRoute] int id, [FromBody] EventCreateModel model)
        {
            var data = _dbContext.Events.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_EVENT);
            if (model.StartDate > model.EndTime) return BadRequest(Message.INVALID_END_TIME);
            data.Name = model.Name;
            data.Description = model.Description;
            data.Location = model.Location;
            data.EndTime= model.EndTime;
            data.StartDate = model.StartDate;
            data.Status = model.Status;
            _dbContext.Events.Update(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("{id:int}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var data = _dbContext.Events.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_EVENT);
            data.Status = 0;
            _dbContext.Events.Update(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }
    }
}
