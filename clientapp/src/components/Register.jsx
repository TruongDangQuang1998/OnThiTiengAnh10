import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/user";

export default function Register() {
    const dispatch = useDispatch();

    const [createUser, setCreateUser] = useState({
        userName: "",
        name: "",
        password: "",
        confirmPassword: "",
        userRoleId: 1,
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setCreateUser({ ...createUser, [name]: value });
    };
    const onCreate = (e) => {
        e.preventDefault();
        dispatch(userManage.register(createUser));
        dispatch(userManage.update_status_register());
    };

    const { isRegisterSuccess } = useSelector((state) => state.user);
    const { messeageRegister } = useSelector((state) => state.user);
    const [statusRegister, setStatusRegister] = useState(null);
    const [messeage, setMesseage] = useState("");
    console.log(messeage,isRegisterSuccess)
    useEffect(() => {
        setStatusRegister(isRegisterSuccess);
        setMesseage(messeageRegister);
    }, [isRegisterSuccess, messeageRegister]);


    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user" onSubmit={onCreate}>
                                    <div className="form-group row">
                                        <div className="col-sm-12 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user"  placeholder="User Name" name="userName" onChange={onChange} />
                                        </div>
                                        
                                    </div>
                                    <div className="form-group row">
                                    
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control form-control-user" placeholder="Name" name="name" onChange={onChange} />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" name="password" onChange={onChange} />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" name="confirmPassword" onChange={onChange} />
                                        </div>
                                    </div>
                                    {statusRegister === false && messeage !== "" ? (<p style={{color:"red",textAlign:"center"}}> {messeage} </p>):"" }
                                    {statusRegister === true && messeage !== "" ? (<p style={{color:"blue",textAlign:"center"}}> {messeage} </p>):"" }
                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                        Register Account
              </button>
                                    <hr />
                   
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="login.html">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
