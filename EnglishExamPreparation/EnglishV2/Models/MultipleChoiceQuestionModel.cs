using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class MultipleChoiceQuestionModel
    {
        public int Id { get; set; }
        public int QuestiongNo { get; set; }
        public string QuestionContent { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string Answer3 { get; set; }
        public string Answer4 { get; set; }
        public int Answer { get; set; }
        public int UserAnswer { get; set; }
        public int TypeQuestionId { get; set; }
        public string TypeQuesitonName { get; set; }
        public bool IsDelete { get; set; }
    }
    public class MultipleChoiceQuestionListModel : ApiJsonResult
    {
        public MultipleChoiceQuestionListModel()
        {
             MultipleChoiceQuestionModels = new List<MultipleChoiceQuestionModel>();
            Total = 0;
        }
        public List<MultipleChoiceQuestionModel>  MultipleChoiceQuestionModels { get; set; }
        public int Total { get; set; }
    }
    public class MultipleChoiceQuestionDetailModel : ApiJsonResult
    {
        public int Id { get; set; }
        public int QuestiongNo { get; set; }
        public string QuestionContent { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string Answer3 { get; set; }
        public string Answer4 { get; set; }
        public int Answer { get; set; }
        public int UserAnswer { get; set; }
        public int ExamId { get; set; }
        public string ExamName { get; set; }
        public int TypeQuestionId { get; set; }
        public string TypeQuestionName { get; set; }
        public bool IsDelete { get; set; }
    }
    public class MultipleChoiceQuestionEditModel
    {
        public int Id { get; set; }
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

    public class MultipleChoiceQuestionAddModel
    {
        public int Id { get; set; }
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
    public class MultipleChoiceQuestionValidator : AbstractValidator<MultipleChoiceQuestionEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public MultipleChoiceQuestionValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}