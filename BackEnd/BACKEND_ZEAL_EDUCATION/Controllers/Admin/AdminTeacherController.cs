using System;
using Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
using Models.Models.Request.Teacher;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
	public class AdminTeacherController : BaseController<AdminTeacherController>
    {
        public AdminTeacherController(ProjectSem3Context dbContext,
            ILogger<AdminTeacherController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetListTeacher()
        {
            var teachers = _dbContext.Accounts.Where(m => m.RoleId == 2);

            return Ok(teachers.ToList());
        }

        [HttpPost]
        public IActionResult CreateTeacher([FromBody] CreateTeacherModel model)
        {
            var usernameExist = _dbContext.Accounts.FirstOrDefault(m => m.Username == model.Username);
            if (usernameExist != null) return BadRequest(Message.USERNAME_MATCHING);
            var salt = Guid.NewGuid().ToString();
            var passHash = Ultils.ComputeSha256Hash(model.Username, salt, model.Password);
            var teacher = new Account
            {
                Username = model.Username,
                Address = model.Address,
                Salt    = salt,
                Password = passHash,
                Name = model.Name,
                Email= model.Email,
                PhoneNumber= model.PhoneNumber,
                Age = model.Age,
                Gender = model.Gender,
                CreatedBy = "Admin",
                Status = 1,
                CreatedDate = DateTime.Now,
                RoleId = 2,
                DateOfbirth = model.DateOfbirth
            };
            _dbContext.Accounts.Add(teacher);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetDetailTeacher([FromRoute] int id)
        {
            var teacher = _dbContext.Accounts.Find(id);
            if (teacher == null) return BadRequest(Message.NOT_FOUND_ACCOUNT);
            return Ok(teacher);
        }

        [HttpPut]
        public IActionResult EditMyAccout([FromBody] EditTeacherModel model)
        {
            var username = getCurrentUsernameLogin();
            var accoutLogin = _dbContext.Accounts.FirstOrDefault(m => m.Username == username);
            if (accoutLogin == null) return Ok(Message.NOT_FOUND_ACCOUNT);
            var salt = accoutLogin.Salt;
            var pasHash = Ultils.ComputeSha256Hash(username, salt?? "", model.Password);
            accoutLogin.Address = model.Address;
            accoutLogin.Password = pasHash;
            accoutLogin.Name = model.Name;
            accoutLogin.Age = model.Age;
            accoutLogin.Gender = model.Gender;
            accoutLogin.Email = model.Email;
            accoutLogin.Status = model.Status;
            accoutLogin.PhoneNumber = model.PhoneNumber;
            accoutLogin.Avatar= model.Avatar;
            accoutLogin.DateOfbirth= model.DateOfbirth;
            accoutLogin.UpdatedDate = DateTime.Now;

            _dbContext.Accounts.Update(accoutLogin);
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }

        [HttpPut("id:int")]
        public IActionResult DeleteTeacherAccount([FromRoute] int id)
        {
            var data = _dbContext.Accounts.FirstOrDefault(m => m.Id == id);
            if (data == null)
                return NotFound(Message.NOT_FOUND_DATA);
            data.Status = 0;
            var eff = _dbContext.SaveChanges();
            return eff > 0 ? Ok(Message.SUCCESS) : BadRequest(Message.FAILED);
        }
    }
}

