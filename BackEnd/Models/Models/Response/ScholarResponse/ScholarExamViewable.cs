using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Response.ScholarResponse
{
    public class ScholarExamViewable
    {
        public int Id { get; set; }
        public int? Status { get; set; }
        public int? Point { get; set; }
        public string? ExamCode { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string? Descreption { get; set; }
        public string? ExamName { get; set; }
    }
}
