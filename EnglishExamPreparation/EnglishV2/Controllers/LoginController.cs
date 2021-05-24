using EnglishV2.Models;
using EnglishV2.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EnglishV2.Controllers
{
    public class LoginController : ApiController
    {
        private IUserService _userService;
        public LoginController()
        {
            _userService = new UserService();
        }
        [HttpPost]
        public IHttpActionResult Login(string username, string password)
        {
            var model = new UserDetailModel();
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                model.ErrorMessages.Add("Username or Password not null!");
                return new HttpApiActionResult(HttpStatusCode.NoContent,model);
            }
            else
            {
                var users = _userService.GetAll();
                var user = users.FirstOrDefault(x => x.UserName == username);
                if(user == null)
                {
                    model.ErrorMessages.Add("NotFound!");
                    return new HttpApiActionResult(HttpStatusCode.NotFound, model) ;
                }
                else
                {
                    if (user.Password == password)
                    {
                        model.Id = user.Id;
                        model.UserName = user.UserName;
                        model.Name = user.Name;
                        model.UserRoleId = user.UserRoleId;
                        model.UserRoleName = user.UserRole.Name;
                        model.Description = user.Description;
                    }
                    else
                    {
                        model.ErrorMessages.Add("User!");
                        return new HttpApiActionResult(HttpStatusCode.NoContent, model);
                    }
                }
            }
            return new HttpApiActionResult(HttpStatusCode.OK, model);
        }
    }
}
