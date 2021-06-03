import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { useDispatch, useSelector } from "react-redux";
import * as examManage from "../actions/exam";

export default function Exam({ match}) {
    const { id } = match.params;

    const dispatch = useDispatch();
    const exam = useSelector((state) => state.exam.examSelected);
    const { currentUser } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(examManage.getExamById({ "examId": id, "userId": currentUser.id }));
    }, [id, currentUser.id])
    return (
        <div id="page-top">
            <div id="page-wrap">

                <section id="quizz-intro-section" className="quizz-intro-section learn-section" style={{ minHeight: 700 }}>
                    <div className="container">

                        {exam && <div className="question-content-wrap">
                            <p className="text-justify-center" style={{ textAlign: "center" }}>
                                <b>{exam.name + "-" + exam.description}</b>

                            </p>
                            <div className="row">
                                <div className="col-md-10 col-md-push-1">
                                    <div className="question-content">
                                        <form method="post" action="https://toeic24.vn/exam/submit?part=5">
                                            <input type="hidden" name="_token" defaultValue="4KESDZBYDWF5synt38QJChO1vY3I6uaJoAeA6rZC" />
                                            {exam.typeQuestionModels && exam.typeQuestionModels.map((item1, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <p className="text-justify">
                                                            <b>{index + 1}/{item1.tillteTypeQuestion}</b>
                                                        </p>

                                                        {(item1.essayQuestionModels.length === 0) ? (
                                                            <div className="answer">
                                                                <p>{(item1.contentTypeQuestion !== null) ? item1.contentTypeQuestion : ""}</p>
                                                                {item1.multipleChoiceQuestionModels.map((item, index) => {
                                                                    return (

                                                                        <Fragment key={index}>
                                                                            <p><b> Question {item.questiongNo}.{item.questionContent}</b></p>

                                                                            <ul className="answer-list">
                                                                                <li key={index}>
                                                                                    <input type="radio" name={item.id} id={item.answer1} />
                                                                                    <label htmlFor={item.answer1}>
                                                                                        <i className="icon icon_radio" /> {item.answer1}</label>
                                                                                </li>
                                                                                <li key={index}>
                                                                                    <input type="radio" name={item.id} id={item.answer2} />
                                                                                    <label htmlFor={item.answer2}>
                                                                                        <i className="icon icon_radio" /> {item.answer2}</label>
                                                                                </li>
                                                                                <li key={index}>
                                                                                    <input type="radio" name={item.id} id={item.answer3} />
                                                                                    <label htmlFor={item.answer3}>
                                                                                        <i className="icon icon_radio" /> {item.answer3}</label>
                                                                                </li>
                                                                                <li key={index}>
                                                                                    <input type="radio" name={item.id} id={item.answer4} />
                                                                                    <label htmlFor={item.answer4}>
                                                                                        <i className="icon icon_radio" /> {item.answer4}</label>
                                                                                </li>


                                                                            </ul>
                                                                        </Fragment>

                                                                    )
                                                                })}
                                                            </div>



                                                        ) : (
                                                            <div className="answer">
                                                                <p>{(item1.contentTypeQuestion !== null) ? item1.contentTypeQuestion : ""}</p>
                                                                {item1.essayQuestionModels.map((item, index) => {
                                                                    return (
                                                                    <Fragment key={index}>
                                                                        <p><b> Question {item.questiongNo}.{item.questionContent}</b></p>
                                                                            <p>{item.suggestions}</p>
                                                                            <input type="text" />
                                                                    </Fragment>
                                                                    )
                                                                })
                                                                }
                                                            </div>
                                                        )}
                                                    </Fragment>

                                                )

                                            })}

                                            <button type="submit" style={{bgColor:"blue"}} class="mc-btn btn-style-6">Next</button>
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


    )
}
