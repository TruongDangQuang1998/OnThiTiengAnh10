using EnglishV2.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnglishV2.Services
{
    public interface IBaseService<T> where T :IBaseEntity
    {
        List<T> GetAll();
        T GetById(int id);
        void Delete(int id);
        void Delete(List<int> ids);
        void Update(T entity);
        void Update(List<T> entities);
        void Insert(T entity);
        void Insert(List<T> entities);
    }
}