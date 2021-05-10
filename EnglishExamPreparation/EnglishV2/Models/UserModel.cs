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

    }
    public class UserListModel
    {
        public UserListModel()
        {
            UserList = new List<UserModel>();
            Total = 0;
        }
        public List<UserModel> UserList { get; set; }
        public int Total { get; set; }
    }
    public class UserDetailModel
    {

    }
    public class UserEditModel
    {
        public int Id { get; set; }
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