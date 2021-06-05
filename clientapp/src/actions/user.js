import api from '../api/api'
import * as types from "../contains/user";
import history from '../history';

export const register = (value) => async (dispatch) => {
    try { 
        const data = await api.User.register(value);
        dispatch({
            type: types.REGISTER,
            payload: data,
        });   

    } catch (error) {
      
    }
};

export const login = (value) => async (dispatch) => {
    try { 
        const data = await api.User.login(value);
        dispatch({
            type: types.LOGIN,
            payload:data,      
        });   
          history.push("/");
    } catch (error) {
      
    }
};

export const logout = () => async (dispatch) => {
    try { 
        dispatch({
            type: types.LOGOUT,
            payload:"",      
        });
        history.push("/login");
    } catch (error) {
    
    }
};

export const update_status_login = () => async (dispatch) => {
    try { 
        
        dispatch({
            type: types.UPDATE_STATUS_LOGIN,
            payload:"",      
        });
      
    } catch (error) {
    
    }
};

export const update_status_register = () => async (dispatch) => {
    try {

        dispatch({
            type: types.UPDATE_STATUS_REGISTER,
            payload: "",
        });

    } catch (error) {

    }
};

export const get_info_user = () => async (dispatch) => {
    try {
        const data = await api.User.get_info_user()
        dispatch({
            type: types.GETCURRENTUSER,
            payload: data,
        });
       
    } catch (error) {
        
    }
};

export const get_list_user = () => async (dispatch) => {
    try {
        const data = await api.User.getUserList();
        dispatch({
            type: types.GETLISTUSER,
            payload: data,
        });
       
    } catch (error) {
       
    }
};

export const delete_user = (id) => async (dispatch) => {
    try {
        const data = await api.User.deleteUser(id);
        dispatch({
            type: types.DELETE_USER,
            payload: id,
        });
       
    } catch (error) {
       
    }
};

export const changePassword = (value) => async (dispatch) => {
    try {
      
         const data = await api.User.changePassword(value);
        dispatch({
            type: types.CHANGE_PASSWORD,
            payload: "",
        });
       
    } catch (error) {
       
    }
};

