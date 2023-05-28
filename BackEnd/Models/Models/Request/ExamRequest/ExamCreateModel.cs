using System;
namespace Models.Models.Request.ExamRequest
{
	public class ExamCreateModel
	{
        public string? ExamCode { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? CourseId { get; set; }

        public string? Descreption { get; set; }
    }
}

