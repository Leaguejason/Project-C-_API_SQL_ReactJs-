using Models.Entities;

namespace Models.Models.Response.ScholarResponse
{
    public class ScholarCourseViewable
    {
        public int Id { get; set; }
        public string? CourseCode { get; set; }
        public string? Name { get; set; }
        public int? Status { get; set; }
        public decimal? Purchased { get; set; }
        public int? AssignmetPoint { get; set; }
        public int? TestPoint { get; set; }
        public string? CourseType { get; set; }
        public string? Descreption { get; set; }
        public string? Image { get; set; }
    }
}
