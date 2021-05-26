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
        public virtual User User { get; set; }
        public int IsMultipleChoiceOrEssay { get; set; }
        public int QuestionId { get; set; }
        public string UserAnswer { get; set; }
        //public virtual EssayQuestion EssayQuestion { get; set; }
        //public int? EssayQuestionId { get; set; }
        //public virtual MultipleChoiceQuestion MultipleChoiceQuestion { get; set; }
        //public int? MultipleChoiceQuestionId { get; set; }
        //public int? MultipleChoiceAnswer { get; set; }
        //public string EssayAnswer { get; set; } = null;
        //public virtual Exam Exam { get; set; }
        //public double ExamAnswer { get; set; }
        public bool IsDelete { get; set; }
    }
}