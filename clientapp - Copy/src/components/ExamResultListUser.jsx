import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/user";

export default function UserList() {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.listUsers);

    useEffect(() => {
        dispatch(userManage.get_list_user());
    },[]);

    useEffect(() => {
        dispatch(userManage.get_list_user());
    }, [user]);

    const onDelete=(id)=>{
        dispatch(userManage.delete_user(id));
    }
    const onResetPassword=(id)=>{
        dispatch(userManage.reset_password_user(id));
    }

    return (
        <div>
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Danh sách User</h1>

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
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        user && user.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{index+1}</td>
                                                    
                                                    {/* <td>{item.userName}</td> */}
                                                    <td> <Link to={`/exam_result_list_user/${item.id}`} className="text-hover-primary mb-0">{item.name}</Link></td>
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
