using EnglishV2.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EnglishV2.DAL
{
    public class EnglishV2Context : DbContext
    {
        public EnglishV2Context() : base("name = ConnectionString")
        {

        }
        public virtual DbSet<Exam> Exams { get; set; }
        public virtual DbSet<ExamResult> ExamResults { get; set; }
        public virtual DbSet<MultipleChoiceQuestion> MultipleChoiceQuestions { get; set; }
        public virtual DbSet<EssayQuestion> EssayQuestions { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<TypeQuestion> TypeQuestions { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }
    }
}