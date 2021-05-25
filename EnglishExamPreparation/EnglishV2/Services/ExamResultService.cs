using EnglishV2.DAL;
using EnglishV2.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;

namespace EnglishV2.Services
{
    public class ExamResultService:BaseService<ExamResult>, IExamResultService
    {

        private EnglishV2Context _context = new EnglishV2Context();
        protected IDbSet<ExamResult> _entities;
        public List<ExamResult> GetByUserId(int userId)
        {
            try
            {
                return _context.ExamResults.Where(x => x.UserId == userId).ToList();
            }
            catch (DbEntityValidationException ex)
            {
                return null;
            }
        }
    }
}