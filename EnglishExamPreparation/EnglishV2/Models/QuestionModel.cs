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

    }
    public class QuestionListModel
    {
        public QuestionListModel()
        {
            QuestionList = new List<QuestionModel>();
            Total = 0;
        }
        public List<QuestionModel> QuestionList { get; set; }
        public int Total { get; set; }
    }
    public class QuestionDetailModel
    {

    }
    public class QuestionEditModel
    {
        public int Id { get; set; }
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