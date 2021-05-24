using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public class EssayQuestion:IBaseEntity
    {
        public int Id { get; set; }
        public string QuestionContent { get; set; }
        public string Suggestions { get; set; } =null;
        public string Answer { get; set; }
        //public int ExamId { get; set; }
        //public virtual Exam Exam { get; set; }
        public int TypeQuestionId { get; set; }
        public virtual TypeQuestion TypeQuestion { get; set; }
        public bool IsDelete { get; set; }
    }
}