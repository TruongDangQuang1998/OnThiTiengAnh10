import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import LeftMenu from './LeftMenu'
import Navbar from './Navbar'
import Footer from './Footer'
import ContentPage from './ContentPage'
import history from '../history';
import titlelist from './TableTitle'
import { Route, Router, Switch } from "react-router-dom";
import Exam from './Exam'

export default function MainPage(props) {

    const { currentUser } = useSelector((state) => state.user);

    const checkLogin = () => {
        if (currentUser
            && Object.keys(currentUser).length === 0 && currentUser.constructor === Object)
        {
            history.push("/login");
        }
    }
    checkLogin();
    
    return (
        <Router history={history}>
            <div>
                <div id="page-top">
                    <div id="wrapper">
                        <LeftMenu></LeftMenu>
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <Navbar></Navbar>
                                {props.children}
                                <Footer></Footer>

                            </div></div>
                    </div>
                </div>
            </div>

        </Router>




    )
}

//   import React, { Fragment, useEffect } from 'react';
//   import { useDispatch, useSelector } from "react-redux";
//   import { Route, Router, Switch } from "react-router-dom";
//   import history from './history';
//   import register from './components/Register'
//   import login from './components/Login'
//   import mainpage from './components/MainPage'


//   function App() {


//       return (
//           <Fragment>
//               <Router history={history}>
//                   <Switch>
//                       <Route exact path="/" component={mainpage} />
//                       <Route exact path="/register" component={register} />
//                       <Route exact path="/login" component={login} />
//                   </Switch>
//               </Router>
//           </Fragment>
//       );
//   }

//   export default App;
