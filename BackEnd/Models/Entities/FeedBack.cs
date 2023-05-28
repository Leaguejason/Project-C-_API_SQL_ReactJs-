using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class FeedBack
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Message { get; set; }

    public int? CreateBy { get; set; }

    public DateTime? CreateDate { get; set; }

    public int? CourseId { get; set; }

    public virtual Course? Course { get; set; }

    public virtual Scholar? CreateByNavigation { get; set; }
}
