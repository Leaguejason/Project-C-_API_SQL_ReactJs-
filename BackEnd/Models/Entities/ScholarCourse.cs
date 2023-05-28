using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class ScholarCourse
{
    public int Id { get; set; }

    public int? Status { get; set; }

    public decimal? Purchased { get; set; }

    public decimal? TuitionFees { get; set; }

    public int? AssignmetPoint { get; set; }

    public int? TestPoint { get; set; }

    public int? ScholarId { get; set; }

    public int? CourseId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public virtual Course? Course { get; set; }

    public virtual Scholar? Scholar { get; set; }
}
