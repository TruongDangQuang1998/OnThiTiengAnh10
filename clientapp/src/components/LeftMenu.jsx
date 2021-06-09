import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "../actions/user";
export default function LeftMenu() {


  const { currentUser } = useSelector((state) => state.user);


  return (
    <div>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div className="sidebar-brand-icon rotate-n-15">
            {/* <i className="fas fa-laugh-wink" /> */}
          </div>
          <div className="sidebar-brand-text mx-3">English <sup>10</sup></div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Divider */}
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          Danh sách
    </div>
        {/* Nav Item - Pages Collapse Menu */}

        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link to={`/`} className=" nav-link mb-0">
            <i className="fas fa-fw fa-chart-area" />
            <span>Đề thi</span>
          </Link>
        </li>

        {currentUser && currentUser.userRoleId === 1
          ? (

            <li className="nav-item">
              <Link to={`/user_list`} className=" nav-link mb-0">
                <i className="fas fa-fw fa-chart-area" />
                <span>User</span>
              </Link>
            </li>
          )
          : ""
        }
        {currentUser && currentUser.userRoleId === 1
          ? (

            <li className="nav-item">
              <Link to={`/exam_result_list_exam`} className=" nav-link mb-0">
                <i className="fas fa-fw fa-chart-area" />
                <span>Kết quả theo Đề</span>
              </Link>
            </li>
          )
          : ""
        }

        {currentUser && currentUser.userRoleId === 1
          ? (

            <li className="nav-item">
              <Link to={`/exam_result_list_user`} className=" nav-link mb-0">
                <i className="fas fa-fw fa-chart-area" />
                <span>Kết quả theo Uesr</span>
              </Link>
            </li>
          )
          : ""
        }

      </ul>
    </div>

  )
}
