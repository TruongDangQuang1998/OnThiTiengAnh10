using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public class User : IBaseEntity
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int Role { get; set; }
        public bool IsDelete { get; set; }
    }
}