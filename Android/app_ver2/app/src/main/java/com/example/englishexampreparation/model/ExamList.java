package com.example.englishexampreparation.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ExamList {
    @SerializedName("examList")
    @Expose
    private List<Exam> exams = null;
    @SerializedName("total")
    @Expose
    private Integer total;
    @SerializedName("result")
    @Expose
    private String result;
    @SerializedName("errorMessages")
    @Expose
    private List<Object> errorMessages = null;
    @SerializedName("messages")
    @Expose
    private List<Object> messages = null;

    public List<Exam> getExams() {
        return exams;
    }

    public void setExams(List<Exam> exams) {
        this.exams = exams;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public List<Object> getErrorMessages() {
        return errorMessages;
    }

    public void setErrorMessages(List<Object> errorMessages) {
        this.errorMessages = errorMessages;
    }

    public List<Object> getMessages() {
        return messages;
    }

    public void setMessages(List<Object> messages) {
        this.messages = messages;
    }

}
