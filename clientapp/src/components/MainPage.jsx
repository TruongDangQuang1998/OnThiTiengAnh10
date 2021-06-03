import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import LeftMenu from './LeftMenu'
import Navbar from './Navbar'
import Footer from './Footer'
import ContentPage from './ContentPage'
import history from '../history';
import titlelist from './TableTitle'
import { Route, Router, Switch } from "react-router-dom";

export default function MainPage() {


    return (
        <Router history={history}>
            <div id="page-top">
                <div id="wrapper">
                    <LeftMenu></LeftMenu>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Navbar></Navbar>
                            <Switch>
                                <Route exact path="/title" component={titlelist} />
                                <Route exact path="/exam" component={titlelist} />
                            </Switch>
                            <Footer></Footer>
                        </div></div>
                </div>
            </div>

        </Router>
        // <div>
        //     <div id="page-top">
        //         <div id="wrapper">
        //             <LeftMenu></LeftMenu>
        //             <div id="content-wrapper" className="d-flex flex-column">
        //                 <div id="content">
        //                     <Navbar></Navbar>
        //                     {/* <Route exact path="/titleList" component={titlelist} /> */}
        //                     <Footer></Footer>

        //                 </div></div>
        //         </div>
        //     </div>
        // </div>
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
