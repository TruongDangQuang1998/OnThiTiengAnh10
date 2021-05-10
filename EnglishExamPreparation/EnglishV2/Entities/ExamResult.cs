using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public class ExamResult : IBaseEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int ExamId { get; set; }
        public Exam Exam { get; set; }
        public double ExamAnswer { get; set; }
        public bool IsDelete { get; set; }
    }
}