import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import history from '../history';
import * as userManage from "../actions/user";
import {Link} from "react-router-dom"

export default function Register() {

    const dispatch = useDispatch();

    const [messeage, setMesseage] = useState("");
    const [statusRegister, setStatusRegister] = useState(null);

    const { currentUser } = useSelector((state) => state.user);
    const { messeageRegister } = useSelector((state) => state.user);
    const { isRegisterSuccess } = useSelector((state) => state.user);

    const [createUser, setCreateUser] = useState({
        userName: "",
        name: "",
        password: "",
        confirmPassword: "",
        userRoleId: 0,
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setCreateUser({ ...createUser, [name]: value });
    };

    const onCreate = (e) => {
        e.preventDefault();
        createUser.userRoleId = 2;
        dispatch(userManage.register(createUser));
        dispatch(userManage.update_status_register());
    };

    useEffect(() => {
        setStatusRegister(isRegisterSuccess);
        setMesseage(messeageRegister);
    }, [isRegisterSuccess, messeageRegister]);


    const checkLogin = () => {
        if (currentUser
            && Object.keys(currentUser).length !== 0) {
            history.push("/");
        }
    }
    checkLogin();
    
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
                    
                   
                                </form>
                                <hr />
                                <div className="text-center">
                                    <td> <Link to={`/login`} className=""> Bấm vào đây để đăng nhập</Link></td>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
