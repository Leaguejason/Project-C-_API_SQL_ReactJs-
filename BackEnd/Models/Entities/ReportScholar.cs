using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class ReportScholar
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Path { get; set; }

    public string? Type { get; set; }

    public int? ScholarId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public string? UpdatedBy { get; set; }

    public virtual Scholar? Scholar { get; set; }
}
