using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public class UserRole : IBaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } = null;
        public bool IsDelete { get; set; }
        public virtual IEnumerable<User> Users { get; set; }
    }
}