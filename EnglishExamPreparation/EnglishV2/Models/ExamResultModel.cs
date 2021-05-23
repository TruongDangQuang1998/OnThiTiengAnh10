using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class ExamResultModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string EssayQuestionName { get; set; }
        public int? EssayQuestionId { get; set; }
        public string MultipleChoiceQuestionName { get; set; }
        public int? MultipleChoiceQuestionId { get; set; }
        public bool IsDelete { get; set; }
    }
    public class ExamResultListModel : ApiJsonResult
    {
        public ExamResultListModel()
        {
            ExamResultList = new List<ExamResultModel>();
            Total = 0;
        }
        public List<ExamResultModel> ExamResultList { get; set; }
        public int Total { get; set; }
    }
    public class ExamResultDetailModel : ApiJsonResult
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string EssayQuestionName { get; set; }
        public int? EssayQuestionId { get; set; }
        public string MultipleChoiceQuestionName { get; set; }
        public int? MultipleChoiceQuestionId { get; set; }
        public bool IsDelete { get; set; }
    }
    public class ExamResultEditModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int EssayQuestionId { get; set; }
        public int MultipleChoiceQuestionId { get; set; }
        public bool IsDelete { get; set; }
    }

    public class ExamResultAddModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int EssayQuestionId { get; set; }
        public int MultipleChoiceQuestionId { get; set; }
        public bool IsDelete { get; set; }
    }
    #endregion

    #region 
    public class ExamResultValidator : AbstractValidator<ExamResultEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public ExamResultValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}