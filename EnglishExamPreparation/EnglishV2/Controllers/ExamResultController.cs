using AutoMapper;
using EnglishV2.DAL;
using EnglishV2.Entities;
using EnglishV2.Models;
using EnglishV2.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace EnglishV2.Controllers
{
    //public class ExamResultController : ApiController
    //{
    //    private IExamResultService _examResultService;
    //    public ExamResultController()
    //    {
    //        _examResultService = new ExamResultService();
    //    }
    //    //public IHttpActionResult

    //    [HttpGet]
    //    public IHttpActionResult GetAll()
    //    {
    //        var model = new ExamResultListModel();
    //        try
    //        {
    //            var examResults = _examResultService.GetAll();
    //            //Mapper.Map(examResults, model.ExamResultList);
    //            //foreach (var item in examResults)
    //            //{
    //            //    model.ExamResultList.Add(new ExamResultModel()
    //            //    {
    //            //        Id = item.Id,
    //            //        ExamAnswer = item.ExamAnswer,
    //            //        ExamId = item.ExamId,
    //            //        ExamName = item.Exam.Name,
    //            //        UserId = item.UserId,
    //            //        UserName = item.User.Name,
    //            //        IsDelete = item.IsDelete
    //            //    });

    //            //}
    //            //model.ExamResultList.Add(new ExamResultModel()
    //            //{
    //            //    Id = 1,
    //            //    ExamAnswer = 123,
    //            //    ExamId = 123,
    //            //    ExamName = "",
    //            //    UserId = 123,
    //            //    UserName = "123",
    //            //    IsDelete = true
    //            //});
    //            return new HttpApiActionResult(HttpStatusCode.OK, model);
    //        }
    //        catch (Exception ex)
    //        {
    //            model.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
    //        }
    //    }

    //    [HttpGet]
    //    public IHttpActionResult GetById(int id)
    //    {
    //        var model = new ExamResultDetailModel();
    //        try
    //        {
    //            var examResult = _examResultService.GetById(id);
    //            //model.Id = examResult.Id;
    //            //model.ExamAnswer = examResult.ExamAnswer;
    //            //model.ExamId = examResult.ExamId;
    //            //model.ExamName = examResult.Exam.Name;
    //            //model.UserId = examResult.UserId;
    //            //model.UserName = examResult.User.Name;
    //            //model.IsDelete = examResult.IsDelete;
    //            return new HttpApiActionResult(HttpStatusCode.OK, model);
    //        }
    //        catch (Exception ex)
    //        {
    //            model.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, model);
    //        }
    //    }

    //    [HttpDelete]
    //    public IHttpActionResult Delete(int id)
    //    {
    //        var res = new ApiJsonResult();
    //        try
    //        {
    //            return new HttpApiActionResult(HttpStatusCode.OK, res);
    //        }
    //        catch (Exception ex)
    //        {
    //            res.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
    //        }
    //    }

    //    [HttpDelete]
    //    public IHttpActionResult Delete(List<int> ids)
    //    {
    //        var res = new ApiJsonResult();
    //        try
    //        {
    //            return new HttpApiActionResult(HttpStatusCode.OK, res);
    //        }
    //        catch (Exception ex)
    //        {
    //            res.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
    //        }
    //    }

    //    [HttpPut]
    //    public IHttpActionResult Update(ExamResultModel entity)
    //    {
    //        var res = new ApiJsonResult();
    //        try
    //        {
    //            return new HttpApiActionResult(HttpStatusCode.OK, res);
    //        }
    //        catch (Exception ex)
    //        {
    //            res.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
    //        }
    //    }

    //    [HttpPut]
    //    public IHttpActionResult Update(List<ExamResultModel> entities)
    //    {
    //        var res = new ApiJsonResult();
    //        try
    //        {
    //            return new HttpApiActionResult(HttpStatusCode.OK, res);
    //        }
    //        catch (Exception ex)
    //        {
    //            res.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
    //        }
    //    }

    //    [HttpPost]
    //    public IHttpActionResult Insert(ExamResultModel entity)
    //    {
    //        var res = new ApiJsonResult();
    //        try
    //        {
    //            return new HttpApiActionResult(HttpStatusCode.OK, res);
    //        }
    //        catch (Exception ex)
    //        {
    //            res.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
    //        }
    //    }

    //    [HttpPut]
    //    public IHttpActionResult Insert(List<ExamResultModel> entities)
    //    {
    //        var res = new ApiJsonResult();
    //        try
    //        {
    //            return new HttpApiActionResult(HttpStatusCode.OK, res);
    //        }
    //        catch (Exception ex)
    //        {
    //            res.ErrorMessages.Add(ex.Message);
    //            return new HttpApiActionResult(HttpStatusCode.BadRequest, res);
    //        }
    //    }
    //}
}
