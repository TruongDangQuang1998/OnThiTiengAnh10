using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class EssayQuestionModel
    {
        public int Id { get; set; }
        public int QuestiongNo { get; set; }
        public string QuestionContent { get; set; }
        public string Suggestions { get; set; }
        public string Answer { get; set; }
        public string UserAnswer { get; set; }
        public int TypeQuestionId { get; set; }
        public string TypeQuestionName { get; set; }
        public bool IsCorrect { get; set; }
        public bool IsDelete { get; set; }
    }
    public class EssayQuestionListModel : ApiJsonResult
    {
        public EssayQuestionListModel()
        {
            EssayQuestionModels = new List<EssayQuestionModel>();
            Total = 0;
        }
        public List<EssayQuestionModel>  EssayQuestionModels { get; set; }
        public int Total { get; set; }
    }
    public class EssayQuestionDetailModel : ApiJsonResult
    {
        public int Id { get; set; }
        public int QuestiongNo { get; set; }
        public string QuestionContent { get; set; }
        public string Suggestions { get; set; }
        public string Answer { get; set; }
        public string UserAnswer { get; set; }
        public int TypeQuestionId { get; set; }
        public string TypeQuestionName { get; set; }
        public bool IsCorrect { get; set; }
        public bool IsDelete { get; set; }
    }
    public class EssayQuestionEditModel
    {
        public int Id { get; set; }
        public string QuestionContent { get; set; }
        public string Suggestions { get; set; }
        public string Answer { get; set; }
        //public string ExamName { get; set; }
        public int TypeQuestionId { get; set; }
        public string TypeQuestionName { get; set; }
        public bool IsDelete { get; set; }
    }
    
    public class EssayQuestionAddModel
    {
        public int Id { get; set; }
        public string QuestionContent { get; set; }
        public string Suggestions { get; set; }
        public string Answer { get; set; }
        public int TypeQuestionId { get; set; }
        //public string TypeQuestionName { get; set; }
        public bool IsDelete { get; set; }
    }
    #endregion

    #region 
    public class EssayQuestionValidator : AbstractValidator<EssayQuestionEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public EssayQuestionValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}