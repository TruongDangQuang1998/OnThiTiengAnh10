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
    public class SubmitExamController : ApiController
    {
        private IExamService _examService;
        private ITypeQuestionService _typeQuestionService;
        private IExamResultService _examResultService;
        private IEssayQuestionService _essayQuestionService;
        private IMultipleChoiceQuestionService _multipleChoiceQuestionService;
        public SubmitExamController()
        {
            _examService = new ExamService();
            _typeQuestionService = new TypeQuestionService();
            _examResultService = new ExamResultService();
            _essayQuestionService = new EssayQuestionService();
            _multipleChoiceQuestionService = new MultipleChoiceQuestionService();
        }
        [Route("Submit")]
        [SwaggerResponse(200, "Returns the result of get list Line", typeof(ExamDetailModel))]
        [SwaggerResponse(500, "Internal Server Error")]
        [SwaggerResponse(400, "Bad Request")]
        [SwaggerResponse(401, "Not Authorizated")]
        [AllowAnonymous]
        [HttpPost]
        public IHttpActionResult GetById(ExamResultModelPost examResultModelPost)
        {
            var examModel = new ExamDetailModel();
            try
            {
                #region insert
                var examResults = _examResultService.GetAll();
                foreach (var question in examResultModelPost.ModelQuestionAnswers)
                {
                    var questionDB=examResults.FirstOrDefault(x =>x.IsMultipleChoiceOrEssay == question .IsMultipleChoiceOrEssay && x.UserId == examResultModelPost.UserId && x.QuestionId == question.QuestionId);
                    if (questionDB == null)
                    {
                        var examanswer = new ExamResult()
                        {

                            IsDelete = false,
                            UserId = examResultModelPost.UserId,
                            QuestionId = question.QuestionId,
                             IsMultipleChoiceOrEssay = question.IsMultipleChoiceOrEssay,
                            UserAnswer = question.UserAnswer
                        };
                        _examResultService.Insert(examanswer);
                    }
                    else
                    {
                        questionDB.UserAnswer = question.UserAnswer;
                        _examResultService.Update(questionDB);
                    }
                };
                #endregion
                var exam = _examService.GetById(examResultModelPost.ExamId);
                var typeQuestions = _typeQuestionService.GetAll();
                var examResultUsers = examResults.Where(x=>x.UserId == examResultModelPost.UserId);
                var essayQuestions = _essayQuestionService.GetAll();
                var multipleChoiceQuestions = _multipleChoiceQuestionService.GetAll();

                //foreach (var exam in exams)
                {
                    var questionNo = 1;
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
                            TillteTypeQuestion = type.Tillte,
                            ContentTypeQuestion = type.ContentTypeQuestion,
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
                                QuestiongNo = questionNo,
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
                            if (examResultUsers != null)
                            {
                                var resultquestion = examResultUsers.FirstOrDefault(x => x.QuestionId == multipleChoice.Id && x.IsMultipleChoiceOrEssay ==0 );
                                if (resultquestion != null)
                                {
                                    multipleChoiceQuestionModel.UserAnswer = int.Parse(resultquestion.UserAnswer);
                                    examModel.CorrectAnswerNo++;
                                }

                            }
                            typeModel.MultipleChoiceQuestionModels.Add(multipleChoiceQuestionModel); 
                            questionNo++;
                        }
                        var essayTypes = essayQuestions.Where(x => x.TypeQuestionId == type.Id);
                        foreach (var essay in essayTypes)
                        {
                            var essayModel = new EssayQuestionModel()
                            {
                                Id = essay.Id,
                                 QuestiongNo =questionNo,
                                Answer = essay.Answer,
                                TypeQuestionId = essay.TypeQuestionId,
                                QuestionContent = essay.QuestionContent,
                                IsDelete = essay.IsDelete,
                                Suggestions = essay.Suggestions,
                                TypeQuestionName = essay.Suggestions
                            };
                            if (examResultUsers != null)
                            {
                                var resultquestion = examResultUsers.FirstOrDefault(x => x.QuestionId == essay.Id && x.IsMultipleChoiceOrEssay ==1);
                                if (resultquestion != null)
                                {
                                    essayModel.UserAnswer = (string)resultquestion.UserAnswer;
                                    essayModel.IsCorrect = false;
                                    examModel.CorrectAnswerNo++;
                                }
                            }
                            typeModel.EssayQuestionModels.Add(essayModel);
                            questionNo++;
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
    }
}
