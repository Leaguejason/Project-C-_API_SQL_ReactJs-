
namespace Models.Models.Response.AccountRequest
{
    public class AccountBaseViewable
    {
        public int Id { get; set; }
        public string Username { get; set; } = "";
        public string Name { get; set; } = "";
        public int? Age { get; set; } = 0;
        public string? Gender { get; set; } = "";
        public string? Address { get; set; } = "";
        public int? Status { get; set; } = 0;
        public DateTime? DateOfbirth { get; set; } = null;
        public string? Descreption { get; set; } = "";
        public DateTime? CreatedDate { get; set; } = null;
    }
}
