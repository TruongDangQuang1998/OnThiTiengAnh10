using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    //public class UserRoleModel
    //{
    //}
    #region Model
    public class UserRoleModel
    {
        public UserRoleModel()
        {
            UserModels = new List<UserModel>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
        public List<UserModel> UserModels { get; set; }
    }
    public class UserRoleListModel : ApiJsonResult
    {
        public UserRoleListModel()
        {
            UserRoleList = new List<UserRoleModel>();
            Total = 0;
        }
        public List<UserRoleModel> UserRoleList { get; set; }
        public int Total { get; set; }
    }
    public class UserRoleDetailModel : ApiJsonResult
    {
        public UserRoleDetailModel()
        {
            UserModels = new List<UserModel>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
        public List<UserModel> UserModels { get; set; }
    }
    public class UserRoleEditModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }

    public class UserRoleAddModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }
    #endregion

    #region 
    public class UserRoleValidator : AbstractValidator<UserRoleEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public UserRoleValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}