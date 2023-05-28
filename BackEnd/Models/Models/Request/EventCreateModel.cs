
using System.ComponentModel.DataAnnotations;

namespace Models.Models.Request
{
    public class EventCreateModel
    {
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        public DateTime? StartDate { get; set; }
        [Required]
        public DateTime? EndTime { get; set; }
        [Required]
        public string? Location { get; set; }
        public int? Status { get; set; } = 1;
        public string? Description { get; set; }
    }
}
