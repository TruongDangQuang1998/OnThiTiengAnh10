
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
import ExamUpdate from './components/ExamUpdate'
import UserList from './components/UserList'
import * as userManage from "./actions/user";
import ChangePassword from './components/ChangePassword'
import userCreate from './components/UserCreate'
import ExamResultListExam from './components/ExamResultListExam'
import ListUserForExamResultListExam from './components/ListUserForExamResultListExam'
import ExamResultListUser from './components/ExamResultListUser'
import ChuaBietDatTenGi from './components/ChuaBietDatTenGi'
import ShowAnswer from './components/ShowAnswer'

function App() {
    const dispatch = useDispatch();

    const { isLoginSuccess } = useSelector((state) => state.user);
    const { isRegisterSuccess } = useSelector((state) => state.user);

    useEffect(() => {
       dispatch(userManage.update_status_login())
    }, []);

    useEffect(() => {
       dispatch(userManage.update_status_register())
    }, []);
    


    return (
        <Fragment>
            <Router history={history}>
                
                <Switch>
                    <Route exact path="/register" component={register} />
                    <Route exact path="/login" component={login} />   
                    <Route exact path="/changePassword" component={ChangePassword}/>
                   
                    <Mainpage>
                        <Route component={({ match }) =>
                            <div>
                                <Route exact path='/' component={titlelist} />
                                <Route exact path='/exam_result_list_user/:id' render={({ match }) => <ChuaBietDatTenGi match={match} />} />
                                <Route exact path='/exam_result_list_exam/:id' render={({ match }) => <ListUserForExamResultListExam match={match} />} />
                                <Route exact path='/exam_result_list_exam' component={ExamResultListExam} />
                                <Route exact path='/exam_result_list_user' component={ExamResultListUser} />
                                <Route exact path='/user_list' component={UserList} />
                                <Route exact path="/exam/:id" render={({ match }) => <Exam match={match} />} />   
                                <Route exact path="/show_answer/:id" render={({ match }) => <ShowAnswer match={match} />} />
                                <Route exact path="/examUpdate/:id" render={({ match }) => <Exam match={match} />} />                         
                                {/* <Route exact path='/userCreate' component={UserCreate} /> */}
                            </div>
                        } />
                    </Mainpage>
                </Switch>
                
            </Router>
        </Fragment>
    );
}

export default App;
