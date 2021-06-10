import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/user";
import * as examManage from "../actions/exam";

export default function ListUserForExamResultListExam({match}) {
    const { id, examName } = match.params;

    const dispatch = useDispatch();


    const list = useSelector((state) => state.exam.getListResultUserByExamID);
    console.log(list)

    useEffect(() => {
        dispatch(examManage.getListUserByExamID(id));
    }, [id]);
    

    return (
        <div>
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Danh sách User-{examName}</h1>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">

                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>UserName</th>
                                        <th>Kết quả</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        list.examList && list.examList.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    {/* <td>{item.userName}</td> */}
                                                    <td> <Link to={`/show_answer/${id}/${item.id}/${item.userName}`} className="text-hover-primary mb-0">{item.userName}</Link></td>
                                                    <td>{item.correctAnswerNo}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
