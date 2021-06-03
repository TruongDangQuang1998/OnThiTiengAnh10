import React from 'react'
import { Link } from "react-router-dom";
export default function LeftMenu() {
  return (
    <div>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
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
          <Link to={`/title`} className=" nav-link mb-0">
            <i className="fas fa-fw fa-chart-area" />
            <span>Đề thi</span>
          </Link>
        </li>


        {/* Nav Item - Tables */}
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-table" />
            <span>User</span></a>
        </li>
        {/* Divider */}

      </ul>
      {/* End of Sidebar */}
    </div>

  )
}
