using Models.Entities;

namespace Models.Models.Response.CourseResponse
{
    public class CourseDetailViewModel
    {
        public int Id { get; set; }
        public string? CourseCode { get; set; }
        public string? Name { get; set; }
        public decimal? TuitionFees { get; set; }
        public string? CourseType { get; set; }
        public string? Descreption { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string? Image { get; set; }
        public List<Scholar>? Scholars { get; set; }
    }
}
