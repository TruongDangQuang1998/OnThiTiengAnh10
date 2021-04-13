using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishExamPreparation.Entities
{
    public class ExamResult
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ExamId { get; set; }
        public string ExamAnswer { get; set; }
    }
}