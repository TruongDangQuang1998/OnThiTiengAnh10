using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EnglishExamPreparation.DAL
{
    public class DatabaseInitializer: DropCreateDatabaseIfModelChanges<EnglishExamPreparationContext>
    {
        protected override void Seed(EnglishExamPreparationContext context)
        {
            //base.Seed(context);
            if (!context.Database.Exists())
                context.Database.Create();
            //context.Countries.Add(country);
            context.SaveChanges();
        }
    }
}