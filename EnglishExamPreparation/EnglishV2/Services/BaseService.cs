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
    public abstract class BaseService<T> : IBaseService<T> where T : class, IBaseEntity
    {
        private EnglishV2Context _context = new EnglishV2Context();
        protected IDbSet<T> _entities;


        /// <summary>
        /// Entities
        /// </summary>
        protected virtual IDbSet<T> Entities
        {
            get
            {
                if (_entities == null)
                    _entities = _context.Set<T>();
                return _entities;
            }
        }


        public List<T> GetAll()
        {
            try
            {
                return this.Entities.Where(x => !x.IsDelete).ToList();
            }
            catch (DbEntityValidationException ex)
            {
                return null;
            }
            
        }
        public List<T> GetByIds(IEnumerable<int> ids)
        {
            try
            {
                return this.Entities.Where(x => ids.Contains(x.Id)).ToList();
            }
            catch (DbEntityValidationException ex)
            {
                return null;
            }
        }
        public T GetById(int id)
        {
            try
            {
                return this.Entities.FirstOrDefault(x => x.Id == id);
            }
            catch (DbEntityValidationException ex)
            {
                return null;
            }
        }
        public void Delete(int id)
        {
            try
            {
                var entity = this.Entities.FirstOrDefault(x => x.Id == id);
                entity.IsDelete = true;
                this._context.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {

            }
        }
        public void Delete(List<int> ids)
        {
            try
            {
                
            }
            catch (DbEntityValidationException ex)
            {

            }
        }
        public void Update(T entity)
        {
            try
            {
                this._context.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {

            }
        }
        public void Update(List<T> entities)
        {
            try
            {
                
            }
            catch (DbEntityValidationException ex)
            {

            }
        }
        public void Insert(T entity)
        {
            try
            {
                this.Entities.Add(entity);
                this._context.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {

            }
        }
        public void Insert(List<T> entities)
        {
            try
            {

            }
            catch (DbEntityValidationException ex)
            {

            }
        }

    }
}