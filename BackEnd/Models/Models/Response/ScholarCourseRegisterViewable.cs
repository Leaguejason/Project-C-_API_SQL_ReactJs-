using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Response
{
    public class ScholarCourseRegisterViewable
    {
        public int Id { get; set; }
        public int? Status { get; set; }
        public decimal? Purchased { get; set; }
        public decimal? TuitionFees { get; set; }
        public int? ScholarId { get; set; }
        public int? CourseId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public Course? Course { get; set; }
        public Account? Scholar { get; set; }
    }
}
