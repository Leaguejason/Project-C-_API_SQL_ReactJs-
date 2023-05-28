using Models.Entities;

namespace Models.Models.Response.ScholarResponse
{
    public class ScholarBaseViewable
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int? Age { get; set; }
        public string? Gender { get; set; }
        public string? Address { get; set; }
        public int? Status { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Descreption { get; set; }
        public DateTime? DateOfbirth { get; set; }
        public virtual Batch? Batch { get; set; }
        public virtual Faculty? Faculty { get; set; }
    }
}
