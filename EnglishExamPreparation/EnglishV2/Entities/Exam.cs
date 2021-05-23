using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public class Exam : IBaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } = null;
        //public virtual ICollection<Question> Questions { get; set; }
        public virtual ICollection<TypeQuestion> TypeQuestions { get; set; }
        public bool IsDelete { get; set; }
    }
}