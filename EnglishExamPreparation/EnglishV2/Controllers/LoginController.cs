using EnglishV2.Entities;
using EnglishV2.Models;
using EnglishV2.Services;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EnglishV2.Controllers
{
    //[EnableCors(origins: "https://localhost:44329/", headers: "*", methods: "*")]
    [EnableCors("*", "*", "*")]
    public class LoginController : ApiController
    {
        private IUserService _userService;
        private IUserRoleService _userRoleService;
        public LoginController()
        {
            _userService = new UserService();
            _userRoleService = new UserRoleService();
        }
        [Route("Login")]
        [SwaggerResponse(200, "Returns the result of get user", typeof(UserDetailModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
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

        [Route("SignUp")]
        [SwaggerResponse(200, "Returns the result of get user", typeof(ApiJsonResult))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpPost]
        public IHttpActionResult SignUp(SignUpModel signUpModel)
        {
            var model = new ApiJsonResult();
            if (string.IsNullOrEmpty(signUpModel.Username) || string.IsNullOrEmpty(signUpModel.Password) || string.IsNullOrEmpty(signUpModel.ConfirmPassword) )
            {
                model.ErrorMessages.Add("Username or Password not null!");
                return new HttpApiActionResult(HttpStatusCode.NoContent, model);
            }
            else
            {
                if(signUpModel.ConfirmPassword == signUpModel.Password)
                {
                    var users = _userService.GetAll();
                    var userRoles = _userRoleService.GetAll();
                    var user = users.FirstOrDefault(x => x.UserName == signUpModel.Username);
                    if (user == null)
                    {
                        //model.ErrorMessages.Add("NotFound!");
                        var role = userRoles.FirstOrDefault(x => x.Id == signUpModel.UserRoleId);
                        if (role != null)
                        {
                            var userCraete = new User()
                            {
                                UserName = signUpModel.Username,
                                Name = signUpModel.Name,
                                Password = signUpModel.Password,
                                UserRoleId = signUpModel.UserRoleId
                            };
                            _userService.Insert(userCraete);
                            return new HttpApiActionResult(HttpStatusCode.OK, model);
                        }
                        else
                        {
                            model.ErrorMessages.Add("Role không tồn tại!");
                            return new HttpApiActionResult(HttpStatusCode.NotFound, model);
                        }
                    }
                    else
                    {
                        model.ErrorMessages.Add("UserName đã tồn tại!");
                        return new HttpApiActionResult(HttpStatusCode.OK, model);
                    }
                }
                else
                {
                    model.ErrorMessages.Add("Password và ConfirmPassword Không giống nhau!");
                    return new HttpApiActionResult(HttpStatusCode.OK, model);
                }
            }
        }
    }
}
