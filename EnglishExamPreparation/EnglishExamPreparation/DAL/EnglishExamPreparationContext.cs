using EnglishExamPreparation.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EnglishExamPreparation.DAL
{
    public class EnglishExamPreparationContext : DbContext
    {
        public EnglishExamPreparationContext() : base("name = ConnectionString")
        {

        }
        public virtual DbSet<Exam> Exams { get; set; }
        public virtual DbSet<ExamResult> ExamResults {get;set;}
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<User> Users { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }
    }
}