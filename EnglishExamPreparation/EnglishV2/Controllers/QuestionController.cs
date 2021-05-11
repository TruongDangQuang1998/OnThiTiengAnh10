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
    public class QuestionController : ApiController
    {
        private IQuestionService _questionService;
        public QuestionController()
        {
            _questionService = new QuestionService();
        }
        //public IHttpActionResult

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var model = new QuestionListModel();
            try
            {
                var questions = _questionService.GetAll();
                foreach (var question in questions)
                {
                    model.QuestionList.Add(new QuestionModel()
                    {
                        Id = question.Id,
                        Answer = question.Answer,
                        Answer1 = question.Answer1,
                        Answer2 = question.Answer2,
                        Answer3 = question.Answer3,
                        Answer4 = question.Answer4,
                        ExamId = question.ExamId,
                        ExamName = question.Exam.Name,
                        QuestionContent = question.QuestionContent,
                        QuestionNumber = question.QuestionNumber,
                        TypeQuestionId = question.TypeQuestionId,
                        TypeQuestionName = question.TypeQuestion.Name,
                        IsDelete = question.IsDelete
                    });

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
            var model = new QuestionDetailModel();
            try
            {
                var questionResult = _questionService.GetById(id);
                var question = new QuestionDetailModel()
                {
                    Id = questionResult.Id,
                    Answer = questionResult.Answer,
                    Answer1 = questionResult.Answer1,
                    Answer2 = questionResult.Answer2,
                    Answer3 = questionResult.Answer3,
                    Answer4 = questionResult.Answer4,
                    ExamId = questionResult.ExamId,
                    ExamName = questionResult.Exam.Name,
                    QuestionContent = questionResult.QuestionContent,
                    QuestionNumber = questionResult.QuestionNumber,
                    TypeQuestionId = questionResult.TypeQuestionId,
                    TypeQuestionName = questionResult.TypeQuestion.Name,
                    IsDelete = questionResult.IsDelete
                };
                model = question;
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
        public IHttpActionResult Update(QuestionModel entity)
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
        public IHttpActionResult Update(List<QuestionModel> entities)
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
        public IHttpActionResult Insert(QuestionModel entity)
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
        public IHttpActionResult Insert(List<QuestionModel> entities)
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
