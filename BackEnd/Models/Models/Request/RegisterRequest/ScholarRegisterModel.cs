using System;
using System.ComponentModel.DataAnnotations;
using Models.Entities;

namespace Models.Models.Request.RegisterRequest
{
    public class ScholarRegisterModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public string Name { get; set; }
        [EmailAddress]
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public int? Age { get; set; }
        public string? Gender { get; set; }
        public string? Address { get; set; }
        public string? Descreption { get; set; }
        public int? RoleId { get; set; }
        public DateTime? DateOfbirth { get; set; }
    }
}