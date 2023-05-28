using Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;
using Scholar_model = Models.Entities.Scholar;
using Models.Models.Request;
using Models.Models.Response.FacultyResponse;
using Models.Models.Response.BatchResponse;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
	public class AdminBatchController : BaseController<AdminBatchController>
	{
        public AdminBatchController(ProjectSem3Context dbContext,
            ILogger<AdminBatchController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetListBatch([FromQuery] int? id = null)
        {
            var result = _dbContext.Batches.Where(m => (m.Id == id || id == null));
            if (result == null)
                return NotFound(Message.NOT_FOUND_BATCH);
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public IActionResult Detail([FromRoute] int id)
        {
            var data = _dbContext.Batches.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_BATCH);
            var scholarList = _dbContext.Scholars.Where(m => m.BatchId == id)
                .Select(m => new Scholar_model
                {
                    Id = m.Id,
                    ScholarCode = m.ScholarCode,
                    AccountId = m.AccountId,
                });
            var result = new BatchDetailViewModel
            {
                Id = id,
                Name = data.Name!,
                BatchCode = data.BatchCode!,
                FromDate = data.FromDate,
                ToDate = data.ToDate,
                Scholars = scholarList.ToList(),
            };
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create([FromBody] BatchCreateModel model)
        {
            var batch = new Batch
            {
                Name = model.Name,
                BatchCode = model.BatchCode,
                FromDate = model.FromDate,
                ToDate = model.ToDate,
                CreatedBy = "Admin",
                CreatedDate = DateTime.Now,
            };
            _dbContext.Batches.Add(batch);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("{id:int}")]
        public IActionResult Edit([FromRoute] int id, [FromBody] BatchCreateModel model)
        {
            var data = _dbContext.Batches.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_BATCH);
            data.Name = model.Name;
            data.BatchCode = model.BatchCode;
            data.FromDate = model.FromDate;
            data.ToDate = model.ToDate;
            data.UpdatedDate = DateTime.Now;
            data.UpdatedBy = "Admin";
            _dbContext.Update(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var data = _dbContext.Batches.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_BATCH);
            _dbContext.Batches.Remove(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }
    }
}

