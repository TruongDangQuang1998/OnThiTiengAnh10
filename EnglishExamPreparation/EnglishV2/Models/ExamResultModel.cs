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

    }
    public class ExamResultListModel
    {
        public ExamResultListModel()
        {
            ExamResultList = new List<ExamResultModel>();
            Total = 0;
        }
        public List<ExamResultModel> ExamResultList { get; set; }
        public int Total { get; set; }
    }
    public class ExamResultDetailModel
    {

    }
    public class ExamResultEditModel
    {
        public int Id { get; set; }
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