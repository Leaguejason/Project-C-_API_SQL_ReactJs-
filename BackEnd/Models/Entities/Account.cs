using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Account
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Name { get; set; } = null!;

    public int? Age { get; set; }

    public string? Gender { get; set; }

    public string? Address { get; set; }

    public string? Salt { get; set; }

    public int? Status { get; set; }

    public string? Descreption { get; set; }

    public int? RoleId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public string? UpdatedBy { get; set; }

    public DateTime? DateOfbirth { get; set; }

    public string? Avatar { get; set; }

    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }

    public virtual Role? Role { get; set; }

    public virtual ICollection<Scholar> Scholars { get; set; } = new List<Scholar>();
}
