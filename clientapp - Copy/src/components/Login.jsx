import React, { useState, useEffect } from 'react'
import history from '../history';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/user";

export default function Login() {
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);
    const { isLoginSuccess} = useSelector((state) => state.user);

    const [statusLogin,setStatusLogin] = useState(null);
    const [info, setInfo] = useState({
        userName: "",
        password: "",
    });
    
    useEffect(() => {  
        setStatusLogin(isLoginSuccess);
       
    }, [isLoginSuccess]);
   
    const onChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const onCreate = (e) => {      
        e.preventDefault();
        dispatch(userManage.update_status_login());
        dispatch(userManage.login(info));
    };

    const checkLogin = () => {
        if (currentUser
            && Object.keys(currentUser).length !== 0) {
            history.push("/");
        }
    }
    checkLogin();

    return (
        <div>
            <div className="">
                <div className="container">
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* Nested Row within Card Body */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user" onSubmit={onCreate}>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter UserName " name="userName" onChange={onChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" name="password" onChange={onChange} />
                                                    </div>
                                                    {statusLogin === false ? <p style={{color:"red"}}>Sai tên đăng nhập hoặc mật khẩu</p>:""}
                                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                                        Login
                      </button>
                                                    
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <td> <Link to={`/register`} className=""> Bấm vào đây để đăng kí</Link></td>
                                                    
                                                </div>
                                             
                                            </div>
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
