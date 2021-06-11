import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import history from '../history';
// import * as userManage from "../actions/userCreate";
import * as userManage from "../actions/user";
import { Link } from "react-router-dom"

export default function UserCreate() {

    const dispatch = useDispatch();

    const [messeage, setMesseage] = useState("");
    const [statusRegister, setStatusRegister] = useState(null);

    // const { currentUser } = useSelector((state) => state.user);
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
        // console.log(e.target);
        const { name, value } = e.target;
        setCreateUser({ ...createUser, [name]: value });
    };

    const onCreate = (e) => {
        e.preventDefault();
        
        console.log(createUser);
        dispatch(userManage.createUser(createUser));
        dispatch(userManage.update_status_register());
    };

    useEffect(() => {
        setStatusRegister(isRegisterSuccess);
        setMesseage(messeageRegister);
    }, [isRegisterSuccess, messeageRegister]);


    // const checkLogin = () => {
    //     if (currentUser
    //         && Object.keys(currentUser).length !== 0) {
    //         history.push("/");
    //     }
    // }
    // checkLogin();

    return (
        <div className="container">
            <div className="col-8">
                <form className="user" onSubmit={onCreate}>
                    <div className="form-group">
                        <label htmlFor="email1">User Name</label>
                        <input type="text" className="form-control " placeholder="User Name" name="userName" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Name</label>
                        <input type="text" className="form-control " placeholder="Name" name="name" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Type</label>
                        <select type="text" className="form-control "  name="userRoleId" onChange={onChange} >
                            {/* <option></option> */}
                          <option value={0}>Vui lòng chọn quyền</option>
                            <option value={1}>Admin</option>
                            <option value={2}>User</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" className="form-control " id="exampleInputPassword" placeholder="Password" name="password" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Confirm Password</label>
                        <input type="password" className="form-control " id="exampleRepeatPassword" placeholder="Repeat Password" name="confirmPassword" onChange={onChange} />
                    </div>{statusRegister === false && messeage !== "" ? (<p style={{ color: "red", textAlign: "center" }}> {messeage} </p>) : ""}
                    {statusRegister === true && messeage !== "" ? (<p style={{ color: "blue", textAlign: "center" }}> {messeage} </p>) : ""}
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
                <hr />         
            </div>
        </div>

    )
}


<div className="row">



</div>
