
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import history from './history';
import register from './components/Register'
import login from './components/Login'
import mainpage from './components/MainPage'
import titlelist from './components/TableTitle'
import LeftMenu from './components/LeftMenu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Exam from './components/Exam'

function App() {


    return (
        <Fragment>
            <Router history={history}>
                <div id="page-top">
                    <div id="wrapper">
                        <LeftMenu></LeftMenu>
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <Navbar></Navbar>
                                <Switch>
                                    <Route exact path="/register" component={register} />
                                    <Route exact path="/login" component={login} />
                                    <Route exact path="/exam/:id" render={({ match }) => <Exam match={match} />} />
                                    <Route exact path="/title" component={titlelist} />
                                    {/* <Route exact path="/exam" component={Exam} /> */}
                                </Switch>
                                <Footer></Footer>
                            </div></div>
                    </div>
                </div>
                
            </Router>
        </Fragment>
    );
}

export default App;
