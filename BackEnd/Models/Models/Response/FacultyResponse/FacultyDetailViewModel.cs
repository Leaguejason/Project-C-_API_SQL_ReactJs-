using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Response.FacultyResponse
{
    public class FacultyDetailViewModel
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? Status { get; set; }
        public string? FacultyCode { get; set; }
        public string? Descreption { get; set; }
        public List<Scholar> Scholars { get; set; }
    }

    public class ScholarFacltyViewable
    {
        public int Id { get; set; }
        public string ScholarCode { get; set; }
        public int AccountId { get; set; }
        public int BatchId { get; set; }
    }
}
