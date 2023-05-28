using Models.Entities;
using System;
namespace Models.Models.Response.CourseResponse
{
	public class ScholarCourseDetailModel
	{
        public string? CourseCode { get; set; }
        public string? Name { get; set; }
        public decimal? TuitionFees { get; set; }
        public string? CourseType { get; set; }
        public string? Descreption { get; set; }
        public string? Image { get; set; }
        public int? Quantity { get; set; }
    }
}

