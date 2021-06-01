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

namespace EnglishV2.Controllers
{
    public class ExamController : ApiController
    {
        private IExamService _examService;
        private ITypeQuestionService _typeQuestionService;
        private IExamResultService _examResultService;
        private IEssayQuestionService _essayQuestionService;
        private IMultipleChoiceQuestionService _multipleChoiceQuestionService;
        private IBusinessService _businessService;
        public ExamController()
        {
            _examService = new ExamService();
            _typeQuestionService = new TypeQuestionService();
            _examResultService = new ExamResultService();
            _essayQuestionService = new EssayQuestionService();
            _multipleChoiceQuestionService = new MultipleChoiceQuestionService();
            _businessService = new BusinessService();
        }
        //public IHttpActionResult
        [Route("ExamGetAll")]
        [SwaggerResponse(200, "Returns the result of get list Exam", typeof(ExamListModel))]
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



                var modelService = _businessService.GetExamModels(exams.Where(x=>x.IsDelete==false).ToList(), typeQuestions, examResults, essayQuestions, multipleChoiceQuestions);
                model.ExamList = modelService;
                model.Total = modelService.Count();
                return new HttpApiActionResult(HttpStatusCode.OK, model);
            }
            catch (Exception ex)
            {
                model.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
            }
        }


        [Route("ExamGetAllTittle")]
        [SwaggerResponse(200, "Returns the result of get list ExamTittle", typeof(ExamTittleListModel))]
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
        [SwaggerResponse(200, "Returns the result of get  ExamModel", typeof(ExamDetailModel))]
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


                var modelService = _businessService.GetExamModel(exam, typeQuestions, examResults, essayQuestions, multipleChoiceQuestions);
                examModel.CorrectAnswerNo = modelService.CorrectAnswerNo;
                examModel.Description = modelService.Description;
                examModel.Id = modelService.Id;
                examModel.IsDelete = modelService.IsDelete;
                examModel.Name = modelService.Name;
                examModel.TypeQuestionModels = modelService.TypeQuestionModels;
                return new HttpApiActionResult(HttpStatusCode.OK, examModel);
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
                var examEntity = _examService.GetById(id);
                if (examEntity != null)
                {
                    examEntity.IsDelete = true;
                    _examService.Update(examEntity);
                }
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

        [Route("UpdateExam")]
        [SwaggerResponse(200, "Returns the result of get  ExamModel", typeof(ApiJsonResult))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpPut]
        public IHttpActionResult Update(ExamModel entity)
        {
            var res = new ApiJsonResult();
            try
            {
                //var examEntuty = _examService.GetById(entity.Id);
                //{
                //    examEntuty.Name = entity.Name;
                //    examEntuty.Description = entity.Description;
                //}
                //_examService.Update(examEntuty);
                var examEntity = _examService.GetById(entity.Id);
                

                //var typeQuestionEntitys = new List<TypeQuestion>();
                //foreach (var typeQuestionModel in entity.TypeQuestionModels)
                //{
                //    var typeQuestionEntity = new TypeQuestion()
                //    {
                //        Id = typeQuestionModel.Id,
                //        ContentTypeQuestion = typeQuestionModel.ContentTypeQuestion,
                //        Description = typeQuestionModel.Description,
                //        ExamId = examEntity.Id,
                //        Name = typeQuestionModel.Name,
                //        Tillte = typeQuestionModel.TillteTypeQuestion
                //    };

                //    //insert
                //    var multipleChoiceQuestionEntitys = new List<MultipleChoiceQuestion>();
                //    foreach (var multipleChoiceQuestionModel in typeQuestionModel.MultipleChoiceQuestionModels)
                //    {
                        
                //        var multipleChoiceQuestionEntity = new MultipleChoiceQuestion()
                //        {
                //            Id  = multipleChoiceQuestionModel.Id,
                //            Answer = multipleChoiceQuestionModel.Answer,
                //            Answer1 = multipleChoiceQuestionModel.Answer1,
                //            Answer2 = multipleChoiceQuestionModel.Answer2,
                //            Answer3 = multipleChoiceQuestionModel.Answer3,
                //            Answer4 = multipleChoiceQuestionModel.Answer4,
                //            IsDelete = multipleChoiceQuestionModel.IsDelete,
                //            QuestionContent = multipleChoiceQuestionModel.QuestionContent,
                //            TypeQuestionId = typeQuestionEntity.Id
                //        };
                //        _multipleChoiceQuestionService.Update(multipleChoiceQuestionEntitys);
                //        //multipleChoiceQuestionEntitys.Add(multipleChoiceQuestionEntity);
                //    }

                //    //insert 
                //    var essayQuestionEntitys = new List<EssayQuestion>();
                //    foreach (var essayQuestionModel in typeQuestionModel.EssayQuestionModels)
                //    {
                //        var essayQuestionEntity = new EssayQuestion()
                //        {
                //             Id = essayQuestionModel.Id,
                //            Answer = essayQuestionModel.Answer,
                //            TypeQuestionId = typeQuestionEntity.Id,
                //            QuestionContent = essayQuestionModel.QuestionContent,
                //            IsDelete = essayQuestionModel.IsDelete,
                //            Suggestions = essayQuestionModel.Suggestions
                //        };
                //        _essayQuestionService.Update(essayQuestionEntity);
                //    }
                //    typeQuestionEntity.MultipleChoiceQuestions = multipleChoiceQuestionEntitys;
                //    typeQuestionEntity.EssayQuestions = essayQuestionEntitys;

                //    _typeQuestionService.Update(typeQuestionEntity);
                //}
                //examEntity.TypeQuestions = typeQuestionEntitys;
                //_examService.Insert(examEntity);


                //foreach (var typeQuestion in examEntity.TypeQuestions)
                //{
                //    foreach (var multipleChoiceQuestion in typeQuestion.MultipleChoiceQuestions)
                //    {
                //        multipleChoiceQuestion.TypeQuestionId = typeQuestion.Id;
                //        _multipleChoiceQuestionService.Insert(multipleChoiceQuestion);
                //    }
                //    foreach (var essayQuestion in typeQuestion.EssayQuestions)
                //    {
                //        essayQuestion.TypeQuestionId = typeQuestion.Id;
                //        _essayQuestionService.Insert(essayQuestion);
                //    }
                //}
                return new HttpApiActionResult(HttpStatusCode.OK, res);
            }
            catch (Exception ex)
            {
                res.ErrorMessages.Add(ex.Message);
                return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
            }
        }
        [Route("Insert")]
        [SwaggerResponse(200, "Returns the result of ApiJsonResult", typeof(ApiJsonResult))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpPost]
        public IHttpActionResult Insert(ExamModel entity)
        {
            var res = new ApiJsonResult();
            try
            {
                var examEntity = new Exam()
                {
                    Name = entity.Name,
                    Description = entity.Description
                };
                var typeQuestionEntitys = new List<TypeQuestion>();
                foreach (var  typeQuestionModel in entity.TypeQuestionModels)
                {
                    var typeQuestionEntity = new TypeQuestion()
                    {
                        ContentTypeQuestion = typeQuestionModel.ContentTypeQuestion,
                        Description = typeQuestionModel.Description,
                        ExamId = examEntity.Id,
                        Name = typeQuestionModel.Name,
                        Tillte = typeQuestionModel.TillteTypeQuestion
                    };

                    //insert
                    var multipleChoiceQuestionEntitys = new List<MultipleChoiceQuestion>();
                    foreach (var  multipleChoiceQuestionModel in typeQuestionModel.MultipleChoiceQuestionModels)
                    {
                        var multipleChoiceQuestionEntity = new MultipleChoiceQuestion()
                        {
                            Answer = multipleChoiceQuestionModel.Answer,
                            Answer1 = multipleChoiceQuestionModel.Answer1,
                            Answer2 = multipleChoiceQuestionModel.Answer2,
                            Answer3 = multipleChoiceQuestionModel.Answer3,
                            Answer4 = multipleChoiceQuestionModel.Answer4,
                            IsDelete = multipleChoiceQuestionModel.IsDelete,
                            QuestionContent = multipleChoiceQuestionModel.QuestionContent,
                            TypeQuestionId = typeQuestionEntity.Id
                        };
                        multipleChoiceQuestionEntitys.Add(multipleChoiceQuestionEntity);
                    }

                    //insert 
                    var essayQuestionEntitys = new List<EssayQuestion>();
                    foreach (var essayQuestionModel in typeQuestionModel.EssayQuestionModels)
                    {
                        var essayQuestionEntity = new EssayQuestion()
                        {
                            Answer = essayQuestionModel.Answer,
                            TypeQuestionId = typeQuestionEntity.Id,
                            QuestionContent = essayQuestionModel.QuestionContent,
                            IsDelete = essayQuestionModel.IsDelete,
                            Suggestions = essayQuestionModel.Suggestions
                        };
                        essayQuestionEntitys.Add(essayQuestionEntity);
                    }
                    typeQuestionEntity.MultipleChoiceQuestions = multipleChoiceQuestionEntitys;
                    typeQuestionEntity.EssayQuestions = essayQuestionEntitys;

                    typeQuestionEntitys.Add(typeQuestionEntity);
                }
                examEntity.TypeQuestions = typeQuestionEntitys;
                _examService.Insert(examEntity);


                foreach (var  typeQuestion in examEntity.TypeQuestions)
                {
                    foreach (var multipleChoiceQuestion in typeQuestion.MultipleChoiceQuestions)
                    {
                        multipleChoiceQuestion.TypeQuestionId = typeQuestion.Id;
                        _multipleChoiceQuestionService.Insert(multipleChoiceQuestion);
                    }
                    foreach (var essayQuestion in typeQuestion.EssayQuestions)
                    {
                        essayQuestion.TypeQuestionId = typeQuestion.Id;
                        _essayQuestionService.Insert(essayQuestion);
                    }
                }








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
