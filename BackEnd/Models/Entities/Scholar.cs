using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Scholar
{
    public int Id { get; set; }

    public int? AccountId { get; set; }

    public int? FacultyId { get; set; }

    public int? BatchId { get; set; }

    public string? ScholarCode { get; set; }

    public virtual Account? Account { get; set; }

    public virtual Batch? Batch { get; set; }

    public virtual Faculty? Faculty { get; set; }

    public virtual ICollection<FeedBack> FeedBacks { get; set; } = new List<FeedBack>();

    public virtual ICollection<ReportScholar> ReportScholars { get; set; } = new List<ReportScholar>();

    public virtual ICollection<ScholarCourse> ScholarCourses { get; set; } = new List<ScholarCourse>();

    public virtual ICollection<ScholarExam> ScholarExams { get; set; } = new List<ScholarExam>();
}
