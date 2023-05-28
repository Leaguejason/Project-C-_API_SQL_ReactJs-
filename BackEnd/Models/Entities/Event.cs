using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Event
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public DateTime? StartDate { get; set; }

    public string? Location { get; set; }

    public int? Status { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public string? Description { get; set; }

    public string? Image { get; set; }

    public DateTime? EndTime { get; set; }
}
