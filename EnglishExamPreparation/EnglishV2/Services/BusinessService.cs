using EnglishV2.Entities;
using EnglishV2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Services
{
    public class BusinessService : IBusinessService
    {
        public ExamModel GetExamModel(Exam exam, List<TypeQuestion> typeQuestions, List<ExamResult> examResultUsers,
            List<EssayQuestion> essayQuestions, List<MultipleChoiceQuestion> multipleChoiceQuestions)
        {
            try
            {
                var examModel = new ExamModel();
                var questionNo = 1;
                examModel = new ExamModel()
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
                            var resultquestion = examResultUsers.FirstOrDefault(x => x.QuestionId == multipleChoice.Id && x.IsMultipleChoiceOrEssay == 0);
                            if (resultquestion != null)
                            {
                                if (int.TryParse(resultquestion.UserAnswer, out int ketqua))
                                {
                                    multipleChoiceQuestionModel.UserAnswer = ketqua;
                                    if (multipleChoiceQuestionModel.Answer == ketqua)
                                    {
                                        examModel.CorrectAnswerNo++;
                                    }
                                }
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
                            QuestiongNo = questionNo,
                            Answer = essay.Answer,
                            TypeQuestionId = essay.TypeQuestionId,
                            QuestionContent = essay.QuestionContent,
                            IsDelete = essay.IsDelete,
                            Suggestions = essay.Suggestions,
                            TypeQuestionName = essay.Suggestions
                        };
                        if (examResultUsers != null)
                        {
                            var resultquestion = examResultUsers.FirstOrDefault(x => x.QuestionId == essay.Id && x.IsMultipleChoiceOrEssay == 1);
                            if (resultquestion != null)
                            {
                                essayModel.UserAnswer = (string)resultquestion.UserAnswer;
                                if (!string.IsNullOrEmpty(essayModel.UserAnswer) && essayModel.Answer.Contains(essayModel.UserAnswer))
                                {
                                    essayModel.IsCorrect = true;
                                    examModel.CorrectAnswerNo++;
                                }
                            }
                        }
                        typeModel.EssayQuestionModels.Add(essayModel);
                        questionNo++;
                    }
                    examModel.TypeQuestionModels.Add(typeModel);
                }
                return examModel;
            }
            catch (Exception ex)
            {
                return new ExamModel();
            }
        }
        public List<ExamModel> GetExamModels(List<Exam> exams, List<TypeQuestion> typeQuestions, List<ExamResult> examResultUsers,
            List<EssayQuestion> essayQuestions, List<MultipleChoiceQuestion> multipleChoiceQuestions)
        {
            try
            {
                var examModels = new List<ExamModel>();
                foreach (var exam in exams)
                {
                    try
                    {
                        examModels.Add(GetExamModel(exam, typeQuestions, examResultUsers, essayQuestions, multipleChoiceQuestions));
                    }
                    catch (Exception ex)
                    {

                        continue;
                    }
                }
                return examModels;
            }
            catch (Exception ex)
            {
                return new List<ExamModel>();
            }
        }
    }
}