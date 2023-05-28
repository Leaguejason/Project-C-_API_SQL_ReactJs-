using System;
using Models.Entities;

namespace Models.Models.Response.ExamResponse
{
	public class ExamBaseViewable
	{
        public int Id { get; set; }

        public string? ExamCode { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? CourseId { get; set; }

        public string? Descreption { get; set; }

        public DateTime? CreatedDate { get; set; }

        public string? CreatedBy { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public string? UpdatedBy { get; set; }
    }
}

