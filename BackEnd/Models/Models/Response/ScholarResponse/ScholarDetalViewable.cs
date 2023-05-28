using Models.Entities;
using Models.Models.Response.ScholarResponse;

namespace Models.Models.Response.ScholarRequest
{
    public class ScholarDetalViewable : ScholarBaseViewable
    {
        public List<ScholarCourseViewable>? CourseList { get; set; }
        public List<ScholarExamViewable>? Exams { get; set; }
    }
}
