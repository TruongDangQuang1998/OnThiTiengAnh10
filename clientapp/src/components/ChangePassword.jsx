import React, { useState, useEffect, Fragment } from 'react'
import history from '../history';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/user";

export default function ChangePassword() {
    const dispatch = useDispatch();
    
    let userId = localStorage.getItem("id");

    const [newPassword, setNewPassword] = useState("");
    
    const onSubmit =(e)=>{
        e.preventDefault();
        dispatch(userManage.changePassword({ "userId": userId,"newPw":newPassword}));
         dispatch(userManage.logout());

    }

    return (

        <div >
  <div className="container">
    {/* Outer Row */}
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-password-image" />
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-2">Đổi mật khẩu</h1>
                    {/* <p className="mb-4">We get it, stuff happens. Just enter your email address below
                      and we'll send you a link to reset your password!</p> */}
                  </div>
                  <form className="user" onSubmit={onSubmit}>
                    <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter New Password..." onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary btn-user btn-block">
                      Đổi mật khẩu
                    </button>
                  </form>
                  <hr />
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
