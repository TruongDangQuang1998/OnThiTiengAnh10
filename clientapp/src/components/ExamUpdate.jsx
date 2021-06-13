import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { useDispatch, useSelector } from "react-redux";
import * as examManage from "../actions/examUpdate";
import Delayed from './Deplayed';

export default function ExamUpdate({ match }) {

    
    const { id } = match.params;
    
    const dispatch = useDispatch();
    
    const { currentUser } = useSelector((state) => state.user);
    
    const exam = useSelector((state) => state.exam.examSelected);
    
    useEffect(() => {
        dispatch(examManage.getExamById({ "examId": id, "userId": currentUser.id }));
    }, [id]);
    
    function handleOnChange(asdf) {
        console.log(asdf, asdf.dataset, asdf.dataset.answerKey);
        exam.typeQuestionModels[asdf.dataset.questionIndex].multipleChoiceQuestionModels[asdf.dataset.answerIndex][asdf.dataset.answerKey] = asdf.value;
        console.log("before ", exam.typeQuestionModels);
        console.log("exam", exam);
    }
    function handleOnChange1(asdf) {
        console.log(asdf );
        exam.typeQuestionModels[asdf.dataset.contenttypequestionIndex].contentTypeQuestion = asdf.value;
        console.log("exam", exam);
    }
    function handleOnChange2(asdf) {
        console.log(asdf );
        exam.typeQuestionModels[asdf.dataset.tilltetypequestionIndex].tillteTypeQuestion = asdf.value;
        console.log("exam", exam);
    }
    function handleOnChange3(asdf) {
        console.log(asdf );
        exam.typeQuestionModels[asdf.dataset.questionIndex].essayQuestionModels[asdf.dataset.answerIndex][asdf.dataset.questionKey] = asdf.value;
        
        console.log("exam", exam);
    }
    function handleOnChange4(asdf) {
        console.log(asdf );
        exam.typeQuestionModels[asdf.dataset.questionIndex].essayQuestionModels[asdf.dataset.answerIndex][asdf.dataset.suggestionsKey] = asdf.value;
        
        console.log("exam", exam);
    }
    function handleOnChange5(asdf) {
        console.log(asdf );
        exam.typeQuestionModels[asdf.dataset.questionIndex].essayQuestionModels[asdf.dataset.answerIndex][asdf.dataset.answerKey] = asdf.value;
        
        console.log("exam", exam);
    }
    function handleOnChange6(asdf) {
        console.log(asdf );
        exam.typeQuestionModels[asdf.dataset.questionIndex].multipleChoiceQuestionModels[asdf.dataset.answerIndex][asdf.dataset.questionKey] = asdf.value;
        
        console.log("exam", exam);
    }
    function handleOnSubmit(e) {
        // e.prevent
     
        e.preventDefault();
        // console.log(exam);
        examManage.updateExam(exam);
        history.push(`/`);
    }
    console.log(exam);
    return (
        <Delayed waitBeforeShow={4000}>
            <div id="page-top">
                <div id="page-wrap">

                    <section id="quizz-intro-section" className="quizz-intro-section learn-section" style={{ minHeight: 700 }}>
                        <div className="container">

                            {exam && <div className="question-content-wrap">
                            <p className="text-justify-center" style={{ textAlign: "center" ,fontSize:20}}>
                                <b>CHỈNH SỬA ĐỀ THI</b></p>
                                <p className="text-justify-center" style={{ textAlign: "center" }}>
                                    <b>{exam.name + "-" + exam.description}</b>
                                </p>
                                <div className="row">
                                    <div className="col-md-10 col-md-push-1">
                                        <div className="question-content">
                                            <form onSubmit={(e) => handleOnSubmit(e)}>
                                                <input type="hidden" name="_token" defaultValue="4KESDZBYDWF5synt38QJChO1vY3I6uaJoAeA6rZC" />
                                                {exam.typeQuestionModels && exam.typeQuestionModels.map((item1, index2) => {
                                                    return (
                                                        <Fragment key={index2}>
                                                            {/* <p className="text-justify" value> */}
                                                                Phần {index2 + 1}:Mô tả
                                                               <textarea onChange={(e) => handleOnChange2(e.target)}  data-tillteTypeQuestion-index={index2} defaultValue={item1.tillteTypeQuestion} /> 
                                                               {/* {item1.tillteTypeQuestion} */}
                                                            {/* </p> */}

                                                            {(item1.essayQuestionModels.length === 0) ? (
                                                                <div className="answer"> Đoạn văn

                        <textarea onChange={(e) => handleOnChange1(e.target)} data-contentTypeQuestion-index={index2}>{(item1.contentTypeQuestion !== null) ? item1.contentTypeQuestion : " "}
                            </textarea> 
                                                                    {item1.multipleChoiceQuestionModels.map((item, index) => {
                                                                        return (
                                                                            <Fragment key={index + index2 + 1}>
                                                                                <p><b> Câu:
                                                                                     {item.questiongNo} Câu hỏi

                                                                                     <textarea type="text" style={{height:'30px'}} onChange={(e) => handleOnChange6(e.target)} data-question-index={index2} data-answer-index={index} data-question-key="questionContent" defaultValue={item.questionContent} name={item.questionContent} />
                                                                                     {/* {item.questionContent} */}
                                                                                     </b>
                                                                                     </p>
                                                                                {/* <input type="text" value={item.answer1} name={item.answer1} /> */}
                                                                                <ul className="answer-list">
                                                                                    <li>

                                                                                        {/* <label htmlFor={item.answer1}>
                                                                                            <i className="icon  " />A. {item.answer1}</label> */}

                                                                                        A. <textarea style={{height:'30px'}} type="text" onChange={(e) => handleOnChange(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="answer1" defaultValue={item.answer1} name={item.answer1} />
                                                                                    </li>
                                                                                    <li>
                                                                                        B. <textarea style={{height:'30px'}} type="text" onChange={(e) => handleOnChange(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="answer2" defaultValue={item.answer2} name={item.answer2} />
                                                                                    </li>
                                                                                    <li>
                                                                                        C. <textarea style={{height:'30px'}} type="text" onChange={(e) => handleOnChange(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="answer3" defaultValue={item.answer3} name={item.answer3} />
                                                                                    </li>
                                                                                    <li>
                                                                                        D. <textarea style={{height:'30px'}} type="text" onChange={(e) => handleOnChange(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="answer4" defaultValue={item.answer4} name={item.answer4} />
                                                                                    </li>
                                                                                    {/* <li>

                                                                                        <label htmlFor={item.userAnswer} style={{color:"blue"}}>
                                                                                            <i className="icon  " />
                                                                                            User Answer: <input type="text" onChange={(e) => handleOnChange(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="userAnswer" defaultValue={item.userAnswer} name={item.userAnswer} />
                                                                                            </label>
                                                                                    </li> */}
                                                                                    <li>

                                                                                        <label htmlFor={item.answer4} style={{color:"blue"}}>
                                                                                            <i className="icon  " />Đáp án: 
                                                                                            {/* {item.answer} */}
                                                                                            <input type="text" onChange={(e) => handleOnChange(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="answer" defaultValue={item.answer} name={item.answer} />
                                                                                            </label>
                                                                                    </li>


                                                                                </ul>
                                                                            </Fragment>

                                                                        )
                                                                    })}
                                                                </div>



                                                            ) : (
                                                                <div className="answer">
                                                                    {/* <input type="text" onChange={(e) => handleOnChange(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="answer3" defaultValue={item.answer3} name={item.answer3} /> */}
                                                                    <p>{(item1.contentTypeQuestion !== null) ? item1.contentTypeQuestion : " "}</p>
                                                                    {item1.essayQuestionModels.map((item, index) => {
                                                                        return (
                                                                            <Fragment key={index}>
                                                                                <p><b> Câu {item.questiongNo}:
                                                                                <textarea style={{height:'30px'}} type="text" onChange={(e) => handleOnChange3(e.target)} data-question-index={index2} data-answer-index={index} data-question-key="questionContent" defaultValue={item.questionContent} name={item.questionContent} />
                                                                                    </b></p>
                                                                                <p>Gợi ý:<textarea style={{height:'30px'}} type="text" onChange={(e) => handleOnChange4(e.target)} data-question-index={index2} data-answer-index={index} data-suggestions-key="suggestions" defaultValue={item.suggestions} name={item.suggestions} />
                                                                                    </p>
                                                                                    
                                                                                    {/* // {item.suggestions} */}
                                                                                <p style={{color:"blue"}}>Đáp án: 
                                                                                <textarea style={{height:'30px'}} type="text" onChange={(e) => handleOnChange5(e.target)} data-question-index={index2} data-answer-index={index} data-answer-key="answer" defaultValue={item.answer} name={item.answer} />
                                                                                {/* "{item.answer}" */}
                                                                                </p>
                                                                            </Fragment>
                                                                        )
                                                                    })
                                                                    }
                                                                </div>
                                                            )}
                                                        </Fragment>

                                                    )

                                                })}

                                                <button type="submit" style={{ bgColor: "blue" }} class="mc-btn btn-style-6">Save</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }

                        </div>
                    </section>
                    <div className="overlayForm" /></div>
            </div>

        </Delayed>


    )
}
