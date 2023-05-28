using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Response
{
    public class FeedbackViewable
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Message { get; set; }
        public int? CreateBy { get; set; }
        public DateTime? CreateDate { get; set; }
        public Account? Account { get; set; }
        public Course? Course { get; set; }
    }
}
