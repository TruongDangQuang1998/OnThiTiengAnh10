using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EnglishV2.DAL
{
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<EnglishV2Context>
    {
        protected override void Seed(EnglishV2Context context)
        {
            base.Seed(context);
            if (!context.Database.Exists())
                context.Database.Create();
            //context.Countries.Add(country);
            context.SaveChanges();
        }
    }
}