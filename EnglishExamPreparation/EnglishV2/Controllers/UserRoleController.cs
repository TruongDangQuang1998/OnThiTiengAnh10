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
    [EnableCors("*", "*", "*")]
    public class UserRoleController : ApiController
    {
        private UserRoleService _userRoleService;
        public UserRoleController()
        {
            _userRoleService = new UserRoleService();
        }
        [Route("GetListUserRole")]
        [SwaggerResponse(200, "Returns the result of UserRoleListModel", typeof(UserRoleListModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var model = new UserRoleListModel();
            try
            {
                var userRoles = _userRoleService.GetAll();
                foreach (var userRole in userRoles)
                {
                    var userRoleModel = new UserRoleModel()
                    {
                        Id = userRole.Id,
                        Name = userRole.Name,
                        Description = userRole.Description
                    };
                    model.UserRoleList.Add(userRoleModel);
                }
                return new HttpApiActionResult(HttpStatusCode.OK, model);
            }
            catch (Exception ex)
            {
                model.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
            }
        }
    }
}
