using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    public class ExamResultModelPost
    {
        public ExamResultModelPost()
        {
            ModelQuestionAnswers = new List<ModelQuestionAnswer>();
        }
        public int UserId { get; set; }
        public int ExamId { get; set; }
        public List<ModelQuestionAnswer> ModelQuestionAnswers { get; set; }
    }
    public class ModelQuestionAnswer
    {
        public int IsMultipleChoiceOrEssay { get; set; }
        public int QuestionId { get; set; }
        public string UserAnswer { get; set; }
    }
}