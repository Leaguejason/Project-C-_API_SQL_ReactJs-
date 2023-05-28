using System;
using Models.Entities;

namespace Models.Models.Request.ExamRequest
{
	public class ExamBaseModel
	{
        public string? ExamCode { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int? CourseId { get; set; }

        public string? Descreption { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public string? UpdatedBy { get; set; }
    }
}

