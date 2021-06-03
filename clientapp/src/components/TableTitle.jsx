import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/exam";

export default function TableTitle() {
    const dispatch = useDispatch();
    const getListTiltleExam = useSelector((state) => state.exam.listTitleExam);
    useEffect(() => {
        dispatch(userManage.getAllTitlExam());
    }, [])
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
                                        <th>TID</th>
                                        <th>Name</th>
                                        <th>Description</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        getListTiltleExam && getListTiltleExam.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td> <Link to={`/exam/${item.id}`} className="text-hover-primary mb-0">{item.name}</Link></td>

                                                    <td>{item.description}</td>
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
