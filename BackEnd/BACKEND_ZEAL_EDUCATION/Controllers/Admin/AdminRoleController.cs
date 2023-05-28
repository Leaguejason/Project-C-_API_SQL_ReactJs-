using Common;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;
using System.Data;

namespace BACKEND_ZEAL_EDUCATION.Controllers.Admin
{
    public class AdminRoleController : BaseController<AdminRoleController>
    {
        public AdminRoleController(ProjectSem3Context dbContext,
            ILogger<AdminRoleController> logger,
            IConfiguration config)
            : base(dbContext, logger, config)
        {
        }

        [HttpGet]
        public IActionResult GetAllRoleList()
        {
            var res = _dbContext.Roles.Select(m
                => new Role
                {
                    Id= m.Id,
                    Name= m.Name,
                    Descreption= m.Descreption,
                });
            return Ok(res);
        }

        //1-admin,2-teacher,3-scholar
        [HttpGet("{roleid:int}")]
        public IActionResult GetEachRoleList(int? roleid)
        {
            var data = _dbContext.Accounts.Where(m => m.RoleId == roleid);
            if (data == null)
                return NotFound(Message.NOT_FOUND_DATA);
            return Ok(data);
        }
    }
}
