import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as examManage from "../actions/exam";
export default function TableTitle({match}) {

    const { id } = match.params;

    const dispatch = useDispatch();


    const list = useSelector((state) => state.exam.getListResultExamByUserID);
    console.log(list);

    useEffect(() => {
        dispatch(examManage.getListExamByUserID(id));
    }, [id]);


    return (
        <div>
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Danh sách đề thi</h1>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">

                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        {/* <th>Description</th>
                                        <th>Update</th>
                                        <th>Delete</th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        list.examList && list.examList.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                               
                                                    <td>{item.id}</td>
                                                    {/* <td>{item.name}</td> */}
                                                    <td> <Link to={`/show_answer/${item.id}`} className="text-hover-primary mb-0">{item.name}</Link></td>
                                                    {/* <td>{item.description}</td>
                                                    <td>
                                                        <button className="btn btn-secondary" onClick={() => updateExam(item.id)}
                                                        >Chỉnh sửa <i class="fas fa-edit" aria-hidden="true"></i></button>

                                                        <Link to={`/examUpdate/${item.id}`} className="text-hover-primary mb-0">Update</Link>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => onDelete(item.id)} >Xóa <i class="fas fa-user-times" aria-hidden="true"></i></button>
                                                    </td> */}
                                                </tr>

                                            )
                                        })

                                    }
                                </tbody>
                                {/* <button className="btn btn-secondary"
                                // onClick={() => onResetPassword(item.id)} 
                                >Tạo Đề <i class="fas fa-folder-plus" aria-hidden="true"></i></button> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
