using EnglishV2.Models;
using EnglishV2.Services;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EnglishV2.Controllers
{
    public class UserController : ApiController
    {
        private IUserService _userService;
        public UserController()
        {
            _userService = new UserService();
        }
        //public IHttpActionResult
        [Route("GetUserListModel")]
        [SwaggerResponse(200, "Returns the result of UserListModel", typeof(UserListModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var model = new UserListModel();
            try
            {
                var users = _userService.GetAll();
                foreach (var user in users.Where(x=>x.IsDelete==false))
                {
                    var userModel = new UserModel()
                    {
                        Id = user.Id,
                        Name = user.Name,
                        Password = user.Password,
                        UserRoleId = user.UserRoleId,
                        Description = user.Description,
                        UserRoleName = user.UserRole.Name,
                        UserName = user.UserName,
                        IsDelete = user.IsDelete
                    };
                    model.UserList.Add(userModel);
                }
                return new HttpApiActionResult(HttpStatusCode.OK, model);
            }
            catch (Exception ex)
            {
                model.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
            }
        }

        [Route("ResetPassword")]
        [SwaggerResponse(200, "Returns the result of ResetPassword", typeof(ApiJsonResult))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult ResetPassword(int userId)
        {
            var model = new ApiJsonResult();
            try
            {
                var users = _userService.GetById(userId);
                if(users != null)
                {
                    users.Password = "123456";
                }
                _userService.Update(users);
                return new HttpApiActionResult(HttpStatusCode.OK, model);
            }
            catch (Exception ex)
            {
                model.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
            }
        }
        [Route("ChangePassword")]
        [SwaggerResponse(200, "Returns the result of ChangePassword", typeof(ApiJsonResult))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult ChangePassword(int userId,string newPassword)
        {
            var model = new ApiJsonResult();
            try
            {
                var users = _userService.GetById(userId);
                if (users != null)
                {
                    users.Password = newPassword;
                }
                _userService.Update(users);
                return new HttpApiActionResult(HttpStatusCode.OK, model);
            }
            catch (Exception ex)
            {
                model.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
            }
        }


        [Route("GetById")]
        [SwaggerResponse(200, "Returns the result of GetById", typeof(UserDetailModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetById(int id)
        {
            var model = new UserDetailModel();
            try
            {
                var user = _userService.GetById(id);
                var userModel = new UserDetailModel()
                {
                    Id = user.Id,
                    Name = user.Name,
                    Password = user.Password,
                    UserRoleId = user.UserRoleId,
                    Description = user.Description,
                    UserRoleName = user.UserRole.Name,
                    UserName = user.UserName,
                    IsDelete = user.IsDelete
                };
                model = userModel;
                return new HttpApiActionResult(HttpStatusCode.OK, model);
            }
            catch (Exception ex)
            {
                model.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
            }
        }

        [Route("Delete")]
        [SwaggerResponse(200, "Returns the result of Delete User", typeof(ApiJsonResult))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var res = new ApiJsonResult();
            try
            {
                var userEntity = _userService.GetById(id);
                if (userEntity != null)
                {
                    userEntity.IsDelete = true;
                    _userService.Update(userEntity);
                }
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }

        //[HttpDelete]
        //public IHttpActionResult Delete(List<int> ids)
        //{
        //    var res = new ApiJsonResult();
        //    try
        //    {
        //        return new HttpApiActionResult(HttpStatusCode.OK, res);
        //    }
        //    catch (Exception ex)
        //    {
        //        res.ErrorMessages.Add(ex.Message);
        //        return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
        //    }
        //}

        //[HttpPut]
        //public IHttpActionResult Update(UserModel entity)
        //{
        //    var res = new ApiJsonResult();
        //    try
        //    {
        //        return new HttpApiActionResult(HttpStatusCode.OK, res);
        //    }
        //    catch (Exception ex)
        //    {
        //        res.ErrorMessages.Add(ex.Message);
        //        return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
        //    }
        //}

        //[HttpPut]
        //public IHttpActionResult Update(List<UserModel> entities)
        //{
        //    var res = new ApiJsonResult();
        //    try
        //    {
        //        return new HttpApiActionResult(HttpStatusCode.OK, res);
        //    }
        //    catch (Exception ex)
        //    {
        //        res.ErrorMessages.Add(ex.Message);
        //        return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
        //    }
        //}

        //[HttpPost]
        //public IHttpActionResult Insert(UserModel entity)
        //{
        //    var res = new ApiJsonResult();
        //    try
        //    {
        //        return new HttpApiActionResult(HttpStatusCode.OK, res);
        //    }
        //    catch (Exception ex)
        //    {
        //        res.ErrorMessages.Add(ex.Message);
        //        return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
        //    }
        //}

        //[HttpPost]
        //public IHttpActionResult Insert(List<UserModel> entities)
        //{
        //    var res = new ApiJsonResult();
        //    try
        //    {
        //        return new HttpApiActionResult(HttpStatusCode.OK, res);
        //    }
        //    catch (Exception ex)
        //    {
        //        res.ErrorMessages.Add(ex.Message);
        //        return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
        //    }
        //}
    }
}
