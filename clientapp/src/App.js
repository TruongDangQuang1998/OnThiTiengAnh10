
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import history from './history';
import register from './components/Register'
import login from './components/Login'
import Mainpage from './components/MainPage'
import titlelist from './components/TableTitle'
import LeftMenu from './components/LeftMenu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Exam from './components/Exam'

function App() {


    return (
        <Fragment>
            <Router history={history}>
                
                <Switch>
                    <Route exact path="/register" component={register} />
                    <Route exact path="/login" component={login} />              
                    <Mainpage>
                        <Route component={({ match }) =>
                            <div>
                                <Route exact path='/' component={titlelist} />
                                <Route exact path="/exam/:id" render={({ match }) => <Exam match={match} />} />                           
                            </div>
                        } />
                    </Mainpage>
                </Switch>
                
            </Router>
        </Fragment>
    );
}

export default App;
