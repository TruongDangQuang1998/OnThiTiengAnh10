using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class ExamTittleModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }
    public class ExamTittleListModel : ApiJsonResult
    {
        public ExamTittleListModel()
        {
            ExamTittleList = new List<ExamTittleModel>();
            Total = 0;
        }
        public List<ExamTittleModel> ExamTittleList { get; set; }
        public int Total { get; set; }
    }
    public class ExamTittleDetailModel : ApiJsonResult
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }
    public class ExamTittleEditModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }

    public class ExamTittleAddModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }
    #endregion

    #region 
    public class ExamTittleValidator : AbstractValidator<ExamTittleEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public ExamTittleValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}