using System;
using System.Collections.Generic;

namespace Models.Entities;

public partial class Role
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Descreption { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
}
