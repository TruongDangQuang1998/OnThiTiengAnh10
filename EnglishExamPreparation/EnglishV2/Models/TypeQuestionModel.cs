using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class TypeQuestionModel
    {
        public TypeQuestionModel()
        {
            EssayQuestionModels = new List<EssayQuestionModel>();
            MultipleChoiceQuestionModels = new List<MultipleChoiceQuestionModel>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
        public List<EssayQuestionModel>  EssayQuestionModels { get; set; }
        public List<MultipleChoiceQuestionModel>  MultipleChoiceQuestionModels { get; set; }
    }
    public class TypeQuestionListModel : ApiJsonResult
    {
        public TypeQuestionListModel()
        {
            TypeQuestionList = new List<TypeQuestionModel>();
            Total = 0;
        }
        public List<TypeQuestionModel> TypeQuestionList { get; set; }
        public int Total { get; set; }
    }
    public class TypeQuestionDetailModel : ApiJsonResult
    {
        public TypeQuestionDetailModel()
        {
            EssayQuestionModels = new List<EssayQuestionModel>();
            MultipleChoiceQuestionModels = new List<MultipleChoiceQuestionModel>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
        public List<EssayQuestionModel> EssayQuestionModels { get; set; }
        public List<MultipleChoiceQuestionModel> MultipleChoiceQuestionModels { get; set; }
    }
    public class TypeQuestionEditModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
        //public List<QuestionModel> Questions { get; set; }
    }
    public class TypeQuestionAddModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }
    #endregion

    #region 
    public class TypeQuestionValidator : AbstractValidator<TypeQuestionEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public TypeQuestionValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}