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
    public class TypeQuestionController : ApiController
    {
        private ITypeQuestionService _typeQuestionService;
        public TypeQuestionController()
        {
            _typeQuestionService = new TypeQuestionService();
        }
        //public IHttpActionResult

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var model = new TypeQuestionListModel();
            try
            {
                var typeQuestions = _typeQuestionService.GetAll();
                foreach (var typeQuestion in typeQuestions)
                {
                    var typeQuestionModel = new TypeQuestionModel()
                    {
                        Id = typeQuestion.Id,
                        Description = typeQuestion.Description,
                        Name = typeQuestion.Name
                    };
                    //foreach (var question in typeQuestion.Questions)
                    //{
                    //    typeQuestionModel.Questions.Add(new QuestionModel()
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
                    model.TypeQuestionList.Add(typeQuestionModel);
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
            var model = new TypeQuestionDetailModel();
            try
            {
                var typeQuestionResult = _typeQuestionService.GetById(id);
                var typeQuestionModel = new TypeQuestionDetailModel()
                {
                    Id = typeQuestionResult.Id,
                    Description = typeQuestionResult.Description,
                    Name = typeQuestionResult.Name
                };
                //foreach (var question in typeQuestionResult.Questions)
                //{
                //    typeQuestionModel.Questions.Add(new QuestionModel()
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
                model = typeQuestionModel;
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
        public IHttpActionResult Update(TypeQuestionModel entity)
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
        public IHttpActionResult Update(List<TypeQuestionModel> entities)
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
        public IHttpActionResult Insert(TypeQuestionModel entity)
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
        public IHttpActionResult Insert(List<TypeQuestionModel> entities)
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
