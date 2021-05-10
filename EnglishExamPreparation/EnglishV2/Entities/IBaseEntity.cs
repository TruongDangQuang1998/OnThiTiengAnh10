using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Entities
{
    public interface IBaseEntity
    {
        int Id { get; set; }
        bool IsDelete { get; set; }
    }
}