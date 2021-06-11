import * as user from "../contains/user"
import history from '../history';

const initialState = {
    currentUser: {},
    listUsers: [],
    isLoginSuccess: null,
    isRegisterSuccess: false,
    messeageRegister: "",
    messeageLogin: "",
    isLogoutSucess: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case user.LOGIN: {
  
            if (typeof payload === "boolean") {
                return { ...state, isLoginSuccess: false };
            }
            if (payload.result === "Success") {
                let userInfo = {
                    "id": payload.id,
                    "name": payload.name,
                    "userName": payload.userName,
                    "userRoleId": payload.userRoleId,
                }
                localStorage.setItem("id",payload.id);

                return { ...state, isLoginSuccess: true, currentUser: userInfo };
            }
        }
        case user.LOGOUT: {
            return {
                ...state,
                currentUser: {},
            };
        }
        case user.REGISTER: {
 
            if (payload.result==="Error") {
                return {
                    ...state,
                    isRegisterSuccess : false,
                    messeageRegister : payload.errorMessages[0],
                }
            }
            else{
                return {
                    ...state,
                    isRegisterSuccess: true,
                    messeageRegister: "Đăng kí thành công!",
                }
            }
        }
        case user.UPDATE_STATUS_LOGIN: {
            return { ...state, isLoginSuccess: null };

        }
        case user.UPDATE_STATUS_REGISTER: {
            return { ...state, isRegisterSuccess: null, messeageRegister: "" };

        }
     
    
        case user.GETLISTUSER: {

            return { ...state, listUsers: payload.userList };
        }

        case user.DELETE_USER: {
            state.listUsers = [...state.listUsers].filter(x=>x.id != payload);
            return { ...state };
        }
        case user.CHANGE_PASSWORD: {
            
            return { ...state };
        }
        default:
            return state;
    }
}