using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class QuestionModel
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
        public string ExamName { get; set; }
        public int TypeQuestionId { get; set; }
        public string TypeQuestionName { get; set; }
        public bool IsDelete { get; set; }
    }
    public class QuestionListModel : ApiJsonResult
    {
        public QuestionListModel()
        {
            QuestionList = new List<QuestionModel>();
            Total = 0;
        }
        public List<QuestionModel> QuestionList { get; set; }
        public int Total { get; set; }
    }
    public class QuestionDetailModel : ApiJsonResult
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
        public string ExamName { get; set; }
        public int TypeQuestionId { get; set; }
        public string TypeQuestionName { get; set; }
        public bool IsDelete { get; set; }
    }
    public class QuestionEditModel
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
        //public string ExamName { get; set; }
        public int TypeQuestionId { get; set; }
        //public string TypeQuestionName { get; set; }
        public bool IsDelete { get; set; }
    }
    
    public class QuestionAddModel
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
        //public string ExamName { get; set; }
        public int TypeQuestionId { get; set; }
        //public string TypeQuestionName { get; set; }
        public bool IsDelete { get; set; }
    }
    #endregion

    #region 
    public class QuestionValidator : AbstractValidator<QuestionEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public QuestionValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}