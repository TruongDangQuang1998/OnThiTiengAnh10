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
    public class UserController : ApiController
    {
        private IUserService _userService;
        public UserController()
        {
            _userService = new UserService();
        }
        //public IHttpActionResult

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var model = new UserListModel();
            try
            {
                var users = _userService.GetAll();
                foreach (var user in users)
                {
                    var userModel = new UserModel() {
                        Id = user.Id,
                        Name = user.Name,
                        Password = user.Password,
                        Role = user.Role,
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

        [HttpGet]
        public IHttpActionResult GetById(int id)
        {
            var model = new UserDetailModel();
            try
            {
                var userResult = _userService.GetById(id);
                var userModel = new UserDetailModel()
                {
                    Id = userResult.Id,
                    Name = userResult.Name,
                    Password = userResult.Password,
                    Role = userResult.Role,
                    UserName = userResult.UserName,
                    IsDelete = userResult.IsDelete
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

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var res = new ApiJsonResult();
            try
            {
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }

        [HttpDelete]
        public IHttpActionResult Delete(List<int> ids)
        {
            var res = new ApiJsonResult();
            try
            {
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }

        [HttpPut]
        public IHttpActionResult Update(UserModel entity)
        {
            var res = new ApiJsonResult();
            try
            {
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }

        [HttpPut]
        public IHttpActionResult Update(List<UserModel> entities)
        {
            var res = new ApiJsonResult();
            try
            {
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }

        [HttpPost]
        public IHttpActionResult Insert(UserModel entity)
        {
            var res = new ApiJsonResult();
            try
            {
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }

        [HttpPost]
        public IHttpActionResult Insert(List<UserModel> entities)
        {
            var res = new ApiJsonResult();
            try
            {
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }
    }
}
