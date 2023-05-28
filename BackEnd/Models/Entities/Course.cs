using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Course
{
    public int Id { get; set; }

    public string? CourseCode { get; set; }

    public string? Name { get; set; }

    public decimal? TuitionFees { get; set; }

    public string? CourseType { get; set; }

    public string? Descreption { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public string? UpdatedBy { get; set; }

    public string? Image { get; set; }

    public int? Status { get; set; }

    public virtual ICollection<Exam> Exams { get; set; } = new List<Exam>();

    public virtual ICollection<FeedBack> FeedBacks { get; set; } = new List<FeedBack>();

    public virtual ICollection<ScholarCourse> ScholarCourses { get; set; } = new List<ScholarCourse>();
}
