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
        [Route("ExamGetAll")]
        [SwaggerResponse(200, "Returns the result of get list Line", typeof(ExamListModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetAll(int userId)
        {
            var model = new ExamListModel();
            try
            {
                var exams = _examService.GetAll();
                var typeQuestions = _typeQuestionService.GetAll();
                var examResults = _examResultService.GetByUserId(userId);
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
                            if (examResults != null)
                            {
                                var resultquestion = examResults.FirstOrDefault(x => x.QuestionId == multipleChoice.Id);
                                if (resultquestion != null)
                                {
                                    multipleChoiceQuestionModel.UserAnswer = int.Parse(resultquestion.UserAnswer);
                                    examModel.CorrectAnswerNo++;
                                }
                            }
                            typeModel.MultipleChoiceQuestionModels.Add(multipleChoiceQuestionModel);
                        }
                        var essayTypes = essayQuestions.Where(x => x.TypeQuestionId == type.Id);
                        foreach (var essay in essayTypes)
                        {
                            var essayModel = new EssayQuestionModel()
                            {
                                Id = essay.Id,
                                Answer = essay.Answer,
                                TypeQuestionId = essay.TypeQuestionId,
                                QuestionContent = essay.QuestionContent,
                                IsDelete = essay.IsDelete,
                                Suggestions = essay.Suggestions,
                                TypeQuestionName = essay.Suggestions
                            };
                            if (examResults!=null)
                            {
                                var resultquestion = examResults.FirstOrDefault(x => x.QuestionId == essay.Id);
                                if (resultquestion != null)
                                {
                                    essayModel.UserAnswer = (string)resultquestion.UserAnswer;
                                    essayModel.IsCorrect = false;
                                    examModel.CorrectAnswerNo++;
                                }
                            }
                            typeModel.EssayQuestionModels.Add(essayModel);
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


        [Route("ExamGetAllTittle")]
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
        [Route("ExamGetById")]
        [SwaggerResponse(200, "Returns the result of get list Line", typeof(ExamDetailModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult GetById(int id,int userId)
        {
            var  examModel = new ExamDetailModel();
            try
            {
                var exam = _examService.GetById(id);
                var typeQuestions = _typeQuestionService.GetAll();
                var examResults = _examResultService.GetByUserId(userId);
                var essayQuestions = _essayQuestionService.GetAll();
                var multipleChoiceQuestions = _multipleChoiceQuestionService.GetAll();

                //foreach (var exam in exams)
                {
                    examModel = new ExamDetailModel()
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
                            if (examResults != null)
                            {
                                var resultquestion = examResults.FirstOrDefault(x => x.QuestionId == multipleChoice.Id);
                                if (resultquestion != null)
                                {
                                    multipleChoiceQuestionModel.UserAnswer = int.Parse(resultquestion.UserAnswer);
                                    examModel.CorrectAnswerNo++;
                                }
                            }
                            typeModel.MultipleChoiceQuestionModels.Add(multipleChoiceQuestionModel);
                        }
                        var essayTypes = essayQuestions.Where(x => x.TypeQuestionId == type.Id);
                        foreach (var essay in essayTypes)
                        {
                            var essayModel = new EssayQuestionModel()
                            {
                                Id = essay.Id,
                                Answer = essay.Answer,
                                TypeQuestionId = essay.TypeQuestionId,
                                QuestionContent = essay.QuestionContent,
                                IsDelete = essay.IsDelete,
                                Suggestions = essay.Suggestions,
                                TypeQuestionName = essay.Suggestions
                            };
                            if (examResults != null)
                            {
                                var resultquestion = examResults.FirstOrDefault(x => x.QuestionId == essay.Id);
                                if (resultquestion != null)
                                {
                                    essayModel.UserAnswer = (string)resultquestion.UserAnswer;
                                    essayModel.IsCorrect = false;
                                    examModel.CorrectAnswerNo++;
                                }
                            }
                            typeModel.EssayQuestionModels.Add(essayModel);
                        }
                        examModel.TypeQuestionModels.Add(typeModel);
                    }
                    return new HttpApiActionResult(HttpStatusCode.OK, examModel);
                }
            }
            catch (Exception ex)
            {
                examModel.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, examModel);
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
