using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public class TypeQuestion : IBaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tillte { get; set; } 
        public string ContentTypeQuestion { get; set; } = null;
        public string Description { get; set; } = null;
        public int ExamId { get; set; }
        public virtual Exam Exam { get; set; }
        public virtual IEnumerable<MultipleChoiceQuestion> MultipleChoiceQuestions { get; set; }
        public virtual IEnumerable<EssayQuestion> EssayQuestions { get; set; }
        public bool IsDelete { get; set; }
    }
}