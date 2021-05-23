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
    public class ExamController : ApiController
    {
        private IExamService _examService;
        public ExamController()
        {
            _examService = new ExamService();
        }
        //public IHttpActionResult
        [Route("GetAll")]
        [SwaggerResponse(200, "Returns the result of get list Line", typeof(ExamListModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var model = new ExamListModel();
            try
            {
                var exams = _examService.GetAll();
                foreach (var exam in exams)
                {
                    var examModel = new ExamModel()
                    {
                        Id = exam.Id,
                        Description = exam.Description;
                        Name = exam.Name,
                        IsDelete = exam.IsDelete,
                      
                    };
                    //get typequestion ở đây
                    foreach (var typeQuestion in exam.TypeQuestions)
                    {
                        //examModel.Questions.Add(new QuestionModel()
                        //{
                        //    Id = question.Id,
                        //    Answer = question.Answer,
                        //    Answer1 = question.Answer1,
                        //    Answer2 = question.Answer2,
                        //    Answer3 = question.Answer3,
                        //    Answer4 = question.Answer4,
                        //    ExamId = question.ExamId,
                        //    ExamName = question.Exam.Name,
                        //    QuestionContent = question.QuestionContent,
                        //    QuestionNumber = question.QuestionNumber,
                        //    TypeQuestionId = question.TypeQuestionId,
                        //    TypeQuestionName = question.TypeQuestion.Name,
                        //    IsDelete = question.IsDelete
                        //});
                    }
                    model.ExamList.Add(examModel);
                }
                return new HttpApiActionResult(HttpStatusCode.OK, model);
            }
            catch (Exception ex)
            {
                model.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
            }
        }


        [Route("GetAllTittle")]
        [SwaggerResponse(200, "Returns the result of get list Line", typeof(ExamTittleListModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetAllTittle()
        {
            var model = new ExamTittleListModel();
            try
            {
                var exams = _examService.GetAll();
                foreach (var exam in exams)
                {
                    var examModel = new ExamTittleModel()
                    {
                        Id = exam.Id,
                        Description = exam.Description,
                        Name = exam.Name,
                        IsDelete = exam.IsDelete
                    };
                    model.ExamTittleList.Add(examModel);
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
            var model = new ExamDetailModel();
            try
            {
                var examResult = _examService.GetById(id);
                var examModel = new ExamDetailModel()
                {
                    Id = examResult.Id,
                    Description = examResult.Description,
                    Name = examResult.Name,
                    IsDelete = examResult.IsDelete,

                };
                //foreach (var question in examResult.Questions)
                //{
                //    examModel.Questions.Add(new QuestionModel()
                //    {
                //        Id = question.Id,
                //        Answer = question.Answer,
                //        Answer1 = question.Answer1,
                //        Answer2 = question.Answer2,
                //        Answer3 = question.Answer3,
                //        Answer4 = question.Answer4,
                //        ExamId = question.ExamId,
                //        ExamName = question.Exam.Name,
                //        QuestionContent = question.QuestionContent,
                //        QuestionNumber = question.QuestionNumber,
                //        TypeQuestionId = question.TypeQuestionId,
                //        TypeQuestionName = question.TypeQuestion.Name,
                //        IsDelete = question.IsDelete
                //    });
                //}
                model = examModel;
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
        public IHttpActionResult Update(ExamModel entity)
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
        public IHttpActionResult Update(List<ExamModel> entities)
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
        public IHttpActionResult Insert(ExamModel entity)
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
        public IHttpActionResult Insert(List<ExamModel> entities)
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
