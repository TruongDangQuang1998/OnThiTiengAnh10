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
using System.Web.Http.Cors;

namespace EnglishV2.Controllers
{
    [EnableCors("*", "*", "*")]
    public class SubmitExamController : ApiController
    {
        private IExamService _examService;
        private ITypeQuestionService _typeQuestionService;
        private IExamResultService _examResultService;
        private IEssayQuestionService _essayQuestionService;
        private IMultipleChoiceQuestionService _multipleChoiceQuestionService;
        private IBusinessService _businessService;
        public SubmitExamController()
        {
            _examService = new ExamService();
            _typeQuestionService = new TypeQuestionService();
            _examResultService = new ExamResultService();
            _essayQuestionService = new EssayQuestionService();
            _multipleChoiceQuestionService = new MultipleChoiceQuestionService();
            _businessService = new BusinessService();
        }
        [Route("Submit")]
        [SwaggerResponse(200, "Returns the result of get ExamModelSuccess", typeof(ExamDetailModel))]
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
                    var questionDB=examResults.FirstOrDefault(x =>
                    x.IsMultipleChoiceOrEssay == question .IsMultipleChoiceOrEssay &&
                    x.UserId == examResultModelPost.UserId &&
                    x.QuestionId == question.QuestionId);
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

                var modelService = _businessService.GetExamModel(exam, typeQuestions, examResultUsers.ToList(), essayQuestions, multipleChoiceQuestions) ;
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
    }
}
