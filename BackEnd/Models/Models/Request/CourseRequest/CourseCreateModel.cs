using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Request.CourseRequest
{
    public class CourseCreateModel
    {
        [Required]
        public string? CourseCode { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public decimal? TuitionFees { get; set; }
        [Required]
        public string? CourseType { get; set; }
        public string? Descreption { get; set; }
        public string? Image { get; set; }
        public int? Status { get; set; } = 1;
    }
}
