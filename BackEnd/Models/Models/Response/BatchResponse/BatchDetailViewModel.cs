using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Response.BatchResponse
{
    public class BatchDetailViewModel
    {
        public int Id { get; set; }
        public string BatchCode { get; set; }
        public string Name { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public List<Scholar> Scholars { get; set; }
    }

    public class ScholarBatchViewable
    {
        public int Id { get; set; }
        public string ScholarCode { get; set; }
        public int AccountId { get; set; }
    }
}

