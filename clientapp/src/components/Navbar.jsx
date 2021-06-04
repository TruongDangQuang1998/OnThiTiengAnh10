import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/user";

export default function Navbar() {

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  
  const onLogOut=()=>{

    dispatch(userManage.logout());
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar  static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw" />
            </a>

          </li>
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">{currentUser ? currentUser.name : ""}</span>
              <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-lock fa-sm fa-fw mr-2 text-gray-400" />
            Đổi mật khẩu
          </a>
              <div className="dropdown-divider" />

              <button className="dropdown-item" href="#" data-toggle="modal"  onClick={onLogOut}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Đăng xuất
          </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>


  )
}
