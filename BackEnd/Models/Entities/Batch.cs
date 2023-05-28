using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Batch
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public DateTime? FromDate { get; set; }

    public DateTime? ToDate { get; set; }

    public string? BatchCode { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public string? UpdatedBy { get; set; }

    public virtual ICollection<Scholar> Scholars { get; set; } = new List<Scholar>();
}
