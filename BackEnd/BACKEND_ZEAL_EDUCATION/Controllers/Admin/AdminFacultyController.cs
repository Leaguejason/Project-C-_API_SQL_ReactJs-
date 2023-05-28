using Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;
using Scholar_model = Models.Entities.Scholar;
using Models.Models.Request;
using Models.Models.Response.FacultyResponse;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
    public class AdminFacultyController : BaseController<AdminFacultyController>
    {
        public AdminFacultyController(ProjectSem3Context dbContext,
            ILogger<AdminFacultyController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetListFaculty([FromQuery] int? status = null)
        {
            var result = _dbContext.Faculties.Where(m => (m.Status == status || status == null));
            if (result == null)
                return NotFound(Message.NOT_FOUND_FACUTLY);
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public IActionResult Detail([FromRoute] int id)
        {
            var data = _dbContext.Faculties.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_FACUTLY);
            var scholarList = _dbContext.Scholars.Where(m => m.FacultyId == id)
                .Select(m => new Scholar_model
                {
                    Id= m.Id,
                    ScholarCode= m.ScholarCode,
                    AccountId= m.AccountId,
                    BatchId= m.BatchId,
                });
            var result = new FacultyDetailViewModel
            {
                Id = id,
                Name = data.Name,
                Status = data.Status,
                Descreption = data.Descreption,
                FacultyCode = data.FacultyCode,
                Scholars = scholarList.ToList(),
            };
            return Ok(result);
        }
        [HttpPost]
        public IActionResult Create([FromBody] FacultyCreateModel model) 
        {
            var faclty = new Faculty
            {
                Name = model.Name,
                Descreption = model.Descreption,
                FacultyCode = model.FacultyCode,
                CreatedBy = "Admin",
                CreatedDate = DateTime.Now,
                Status = model.Starus,
            };
            _dbContext.Faculties.Add(faclty);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("{id:int}")]
        public IActionResult Edit([FromRoute] int id, [FromBody] FacultyCreateModel model)
        {
            var data = _dbContext.Faculties.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_FACUTLY);
            data.Name = model.Name;
            data.FacultyCode = model.FacultyCode;
            data.Descreption = model.Descreption;
            data.Status = model.Starus;
            data.UpdatedDate = DateTime.Now;
            data.UpdatedBy = "Admin";
            _dbContext.Update(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var data = _dbContext.Faculties.Find(id);
            if (data == null) return NotFound(Message.NOT_FOUND_FACUTLY);
            data.Status = 0;
            data.UpdatedDate = DateTime.Now;
            data.UpdatedBy = "Admin";
            _dbContext.Faculties.Update(data);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED) ;
        }
    }
}
