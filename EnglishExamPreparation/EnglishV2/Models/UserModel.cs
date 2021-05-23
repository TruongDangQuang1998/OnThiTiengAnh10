using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Models
{
    #region Model
    public class UserModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } = null;
        public int UserRoleId { get; set; }
        public string UserRoleName { get; set; }
        public bool IsDelete { get; set; }
    }
    public class UserListModel : ApiJsonResult
    {
        public UserListModel()
        {
            UserList = new List<UserModel>();
            Total = 0;
        }
        public List<UserModel> UserList { get; set; }
        public int Total { get; set; }
    }
    public class UserDetailModel : ApiJsonResult
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int UserRoleId { get; set; }
        public string UserRoleName { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }
    public class UserEditModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int UserRoleId { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }

    public class UserAddModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int UserRoleId { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
    }
    #endregion

    #region 
    public class UserValidator : AbstractValidator<UserEditModel>
    {
        /// <summary>
        /// Define validators here
        /// </summary>
        public UserValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
    #endregion
}