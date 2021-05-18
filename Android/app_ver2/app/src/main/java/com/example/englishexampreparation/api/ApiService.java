package com.example.englishexampreparation.api;

import com.example.englishexampreparation.model.Exam;
import com.example.englishexampreparation.model.ExamList;
import com.google.gson.GsonBuilder;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;

public interface ApiService {
//    ApiService apiService = new Retrofit.Builder().baseUrl("https://localhost:44329/api/")
//            .addConverterFactory(GsonConverterFactory.create(new GsonBuilder().setDateFormat("yyyy-MM-dd").create())).build().create(ApiService.class);
//    @GET("GetAll")
//    Call<List<Exam>> getAllExam();
    @GET("Exam/1")
    Call<Exam> getExamById();
    @GET("GetAll")
    Call<ExamList> getAllExamList();

}
