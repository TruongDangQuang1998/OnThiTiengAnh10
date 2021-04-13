using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EnglishExamPreparation.DAL;
using EnglishExamPreparation.Entities;

namespace EnglishExamPreparation.Controllers
{
    public class ExamResultsController : ApiController
    {
        private EnglishExamPreparationContext db = new EnglishExamPreparationContext();

        // GET: api/ExamResults
        public IQueryable<ExamResult> GetExamResults()
        {
            return db.ExamResults;
        }

        // GET: api/ExamResults/5
        [ResponseType(typeof(ExamResult))]
        public IHttpActionResult GetExamResult(int id)
        {
            ExamResult examResult = db.ExamResults.Find(id);
            if (examResult == null)
            {
                return NotFound();
            }

            return Ok(examResult);
        }

        // PUT: api/ExamResults/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutExamResult(int id, ExamResult examResult)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != examResult.Id)
            {
                return BadRequest();
            }

            db.Entry(examResult).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExamResultExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ExamResults
        [ResponseType(typeof(ExamResult))]
        public IHttpActionResult PostExamResult(ExamResult examResult)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ExamResults.Add(examResult);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = examResult.Id }, examResult);
        }

        // DELETE: api/ExamResults/5
        [ResponseType(typeof(ExamResult))]
        public IHttpActionResult DeleteExamResult(int id)
        {
            ExamResult examResult = db.ExamResults.Find(id);
            if (examResult == null)
            {
                return NotFound();
            }

            db.ExamResults.Remove(examResult);
            db.SaveChanges();

            return Ok(examResult);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExamResultExists(int id)
        {
            return db.ExamResults.Count(e => e.Id == id) > 0;
        }
    }
}