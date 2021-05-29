using EnglishV2.Entities;
using EnglishV2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Services
{
    public interface IBusinessService
    {
        ExamModel GetExamModel(Exam exam, List<TypeQuestion> typeQuestions, List<ExamResult> examResultUsers,
            List<EssayQuestion> essayQuestions, List<MultipleChoiceQuestion> multipleChoiceQuestions);
        List<ExamModel> GetExamModels(List<Exam> exams, List<TypeQuestion> typeQuestions, List<ExamResult> examResultUsers,
            List<EssayQuestion> essayQuestions, List<MultipleChoiceQuestion> multipleChoiceQuestions);
    }
    
}