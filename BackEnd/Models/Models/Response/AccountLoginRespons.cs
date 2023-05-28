using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Response
{
    public class AccountLoginRespons
    {
        public string? AccessToken { get; set; }
        public int? RoleId { get; set; }
    }
}
