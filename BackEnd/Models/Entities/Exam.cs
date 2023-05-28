using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Exam
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

    public virtual Course? Course { get; set; }

    public virtual ICollection<ScholarExam> ScholarExams { get; set; } = new List<ScholarExam>();
}
