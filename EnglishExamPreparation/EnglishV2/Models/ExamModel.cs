using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class ExamModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<QuestionModel> Questions { get; set; }
        public bool IsDelete { get; set; }
    }
    public class ExamListModel
    {
        public ExamListModel()
        {
            ExamList = new List<ExamModel>();
            Total = 0;
        }
        public List<ExamModel> ExamList { get; set; }
        public int Total { get; set; }
    }
    public class ExamDetailModel
    {

    }
    public class ExamEditModel
    {
        public int Id { get; set; }
    }
    #endregion

    #region 
    public class ExamValidator : AbstractValidator<ExamEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public ExamValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}