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
        private ITypeQuestionService _typeQuestionService;
        private IExamResultService _examResultService;
        private IEssayQuestionService _essayQuestionService;
        private IMultipleChoiceQuestionService _multipleChoiceQuestionService;
        public ExamController()
        {
            _examService = new ExamService();
            _typeQuestionService = new TypeQuestionService();
            _examResultService = new ExamResultService();
            _essayQuestionService = new EssayQuestionService();
            _multipleChoiceQuestionService = new MultipleChoiceQuestionService();
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
                var typeQuestions = _typeQuestionService.GetAll();
                var examResults = _examResultService.GetAll();
                var essayQuestions = _essayQuestionService.GetAll();
                var multipleChoiceQuestions = _multipleChoiceQuestionService.GetAll();
                
                foreach (var exam in exams)
                {
                    var examModel = new ExamModel()
                    {
                        Id = exam.Id,
                        Description = exam.Description,
                        Name = exam.Name,
                        IsDelete = exam.IsDelete
                    };
                    var types = typeQuestions.Where(x => x.ExamId == exam.Id);
                    foreach (var type in types)
                    {
                        var typeModel = new TypeQuestionModel()
                        {
                            Id = type.Id,
                            Description = type.Description,
                            IsDelete = type.IsDelete,
                            Name = type.Name
                        };
                        var multipleTypes = multipleChoiceQuestions.Where(x => x.TypeQuestionId == type.Id);
                        foreach (var multipleChoice in multipleTypes)
                        {
                            var multipleChoiceQuestionModel = new MultipleChoiceQuestionModel()
                            {
                                Id = multipleChoice.Id,
                                Answer = multipleChoice.Answer,
                                Answer1 = multipleChoice.Answer1,
                                Answer2 = multipleChoice.Answer2,
                                Answer3 = multipleChoice.Answer3,
                                Answer4 = multipleChoice.Answer4,
                                IsDelete = multipleChoice.IsDelete,
                                QuestionContent = multipleChoice.QuestionContent,
                                TypeQuesitonName = multipleChoice.TypeQuestion.Name,
                                TypeQuestionId = multipleChoice.TypeQuestionId
                            };
                            typeModel.MultipleChoiceQuestionModels.Add(multipleChoiceQuestionModel);
                        }
                        var essayTypes = essayQuestions.Where(x => x.TypeQuestionId == type.Id);
                        foreach (var essay in essayTypes)
                        {
                            var essayModels = new EssayQuestionModel()
                            {
                                Id = essay.Id,
                                Answer = essay.Answer,
                                TypeQuestionId = essay.TypeQuestionId,
                                QuestionContent = essay.QuestionContent,
                                IsDelete = essay.IsDelete,
                                Suggestions = essay.Suggestions,
                                TypeQuestionName = essay.Suggestions
                            };
                            typeModel.EssayQuestionModels.Add(essayModels);
                        }
                        examModel.TypeQuestionModels.Add(typeModel);
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
