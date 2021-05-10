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

    }
    public class TypeQuestionListModel
    {
        public TypeQuestionListModel()
        {
            TypeQuestionList = new List<TypeQuestionModel>();
            Total = 0;
        }
        public List<TypeQuestionModel> TypeQuestionList { get; set; }
        public int Total { get; set; }
    }
    public class TypeQuestionDetailModel
    {

    }
    public class TypeQuestionEditModel
    {
        public int Id { get; set; }
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