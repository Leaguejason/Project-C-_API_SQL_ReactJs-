using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Request.ScholarRequest
{
    public class ScholarBaseModel
    {
        public string Name { get; set; } = null!;
        public int? Age { get; set; }
        public string? Gender { get; set; }
        public string? Address { get; set; }
        public int? Status { get; set; }
        public string? Descreption { get; set; }
        public DateTime? DateOfbirth { get; set; }
    }
}
