using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Request
{
    public class FacultyCreateModel
    {
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? FacultyCode { get; set; } = string.Empty;
        public string? Descreption { get; set; } = null;
        public int? Starus { get; set; } = 0;
    }
}
