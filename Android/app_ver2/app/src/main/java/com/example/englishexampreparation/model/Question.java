package com.example.englishexampreparation.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Question {
    @SerializedName("id")
    @Expose
    private Integer id;
    @SerializedName("questionNumber")
    @Expose
    private Integer questionNumber;
    @SerializedName("questionContent")
    @Expose
    private String questionContent;
    @SerializedName("answer1")
    @Expose
    private String answer1;
    @SerializedName("answer2")
    @Expose
    private String answer2;
    @SerializedName("answer3")
    @Expose
    private String answer3;
    @SerializedName("answer4")
    @Expose
    private String answer4;
    @SerializedName("answer")
    @Expose
    private Integer answer;
    @SerializedName("examId")
    @Expose
    private Integer examId;
    @SerializedName("examName")
    @Expose
    private String examName;
    @SerializedName("typeQuestionId")
    @Expose
    private Integer typeQuestionId;
    @SerializedName("typeQuestionName")
    @Expose
    private String typeQuestionName;
    @SerializedName("isDelete")
    @Expose
    private Boolean isDelete;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuestionNumber() {
        return questionNumber;
    }

    public void setQuestionNumber(Integer questionNumber) {
        this.questionNumber = questionNumber;
    }

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public String getAnswer1() {
        return answer1;
    }

    public void setAnswer1(String answer1) {
        this.answer1 = answer1;
    }

    public String getAnswer2() {
        return answer2;
    }

    public void setAnswer2(String answer2) {
        this.answer2 = answer2;
    }

    public String getAnswer3() {
        return answer3;
    }

    public void setAnswer3(String answer3) {
        this.answer3 = answer3;
    }

    public String getAnswer4() {
        return answer4;
    }

    public void setAnswer4(String answer4) {
        this.answer4 = answer4;
    }

    public Integer getAnswer() {
        return answer;
    }

    public void setAnswer(Integer answer) {
        this.answer = answer;
    }

    public Integer getExamId() {
        return examId;
    }

    public void setExamId(Integer examId) {
        this.examId = examId;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public Integer getTypeQuestionId() {
        return typeQuestionId;
    }

    public void setTypeQuestionId(Integer typeQuestionId) {
        this.typeQuestionId = typeQuestionId;
    }

    public String getTypeQuestionName() {
        return typeQuestionName;
    }

    public void setTypeQuestionName(String typeQuestionName) {
        this.typeQuestionName = typeQuestionName;
    }

    public Boolean getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Boolean isDelete) {
        this.isDelete = isDelete;
    }

}
