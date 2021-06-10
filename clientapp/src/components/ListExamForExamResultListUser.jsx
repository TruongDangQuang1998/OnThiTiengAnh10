import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as examManage from "../actions/exam";
export default function TableTitle({match}) {

    const { id,userName } = match.params;

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
                <h1 className="h3 mb-2 text-gray-800">DANH SÁCH ĐỀ THI-{userName} </h1>

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
                                         <th>Kết quả</th>
                                        
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        list.examList && list.examList.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                               
                                                    <td>{item.id}</td>
                                                    <td> <Link to={`/show_answer/${item.id}/${id}/${userName}`} className="text-hover-primary mb-0">{item.name}</Link></td>
                                                    <td> {item.correctAnswerNo}</td>
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



// import React, { useState, useEffect, Fragment } from 'react'
// import history from '../history';
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import * as userManage from "../actions/user";

// export default function ListExamForExamResultListUser() {

//     const dispatch = useDispatch();

//     const user = useSelector((state) => state.user.listUsers);

//     useEffect(() => {
//         dispatch(userManage.get_list_user());
//     }, []);

//     useEffect(() => {
//         dispatch(userManage.get_list_user());
//     }, [user]);

//     const onDelete = (id) => {
//         dispatch(userManage.delete_user(id));
//     }
//     const onResetPassword = (id) => {
//         dispatch(userManage.reset_password_user(id));
//     }

//     return (
//         <div>
//             <div className="container-fluid">
//                 {/* Page Heading */}
//                 <h1 className="h3 mb-2 text-gray-800">Danh sách User</h1>

//                 <div className="card shadow mb-4">
//                     <div className="card-header py-3">

//                     </div>
//                     <div className="card-body">
//                         <div className="table-responsive">
//                             <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
//                                 <thead>
//                                     <tr>
//                                         <th>No.</th>
//                                         <th>UserName</th>
//                                         <th>Name</th>
                                      
//                                     </tr>
//                                 </thead>

//                                 <tbody>
//                                     {
//                                         user && user.map((item, index) => {
//                                             return (
//                                                 <tr key={item.id}>
//                                                     <td>{index + 1}</td>
//                                                     {/* <td>{item.userName}</td> */}
//                                                      <td> <Link to={`/show_answer/${item.id}`} className="text-hover-primary mb-0">{item.name}</Link></td>
                                                   
//                                                     <td>{item.name}</td>
//                                                     <td>{item.correctAnswerNo}</td>
//                                                 </tr>
//                                             )
//                                         })
//                                     }
//                                 </tbody>

//                             </table>
//                             <button className="btn btn-secondary"
//                             // onClick={() => onResetPassword(item.id)} 
//                             >Tạo Tài Khoản <i class="fas fa-user-plus" aria-hidden="true"></i></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >

//     )
// }
