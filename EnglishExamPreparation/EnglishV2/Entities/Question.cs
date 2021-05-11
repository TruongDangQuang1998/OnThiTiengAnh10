using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public class Question : IBaseEntity
    {
        public int Id { get; set; }
        public int QuestionNumber { get; set; }
        public string QuestionContent { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string Answer3 { get; set; }
        public string Answer4 { get; set; }
        public int Answer { get; set; }
        public int ExamId { get; set; }
        public virtual Exam Exam { get; set; }
        public int TypeQuestionId { get; set; }
        public virtual TypeQuestion TypeQuestion { get; set; }
        public bool IsDelete { get; set; }
    }
}