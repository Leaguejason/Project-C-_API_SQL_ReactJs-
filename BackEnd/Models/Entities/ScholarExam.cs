using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class ScholarExam
{
    public int Id { get; set; }

    public int? Status { get; set; }

    public int? Point { get; set; }

    public int? ScholarId { get; set; }

    public int? ExamId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public virtual Exam? Exam { get; set; }

    public virtual Scholar? Scholar { get; set; }
}
