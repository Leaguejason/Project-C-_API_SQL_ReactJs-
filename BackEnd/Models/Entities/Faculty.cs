using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Faculty
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? FacultyCode { get; set; }

    public string? Descreption { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public string? UpdatedBy { get; set; }

    public int? Status { get; set; }

    public virtual ICollection<Scholar> Scholars { get; set; } = new List<Scholar>();
}
