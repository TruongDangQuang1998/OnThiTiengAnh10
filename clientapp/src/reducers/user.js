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
            console.log(payload);
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
            console.log(payload);
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
                    messeageRegister: "Đăng kí thành công! Vui lòng đăng nhập lại ",
                }
            }
        }
        case user.UPDATE_STATUS_LOGIN: {
            return { ...state, isLoginSuccess: null };

        }
        case user.UPDATE_STATUS_REGISTER: {
            return { ...state, isRegisterSuccess: null, messeageRegister: "" };

        }
        case user.LOGOUT: {
            return {
                ...state,
                isLoginSuccess: false,
                currentUser: {},
            };
        }
        case user.GETCURRENTUSER: {
            return {
                ...state, currentUser: payload

            };
        }
        case user.GETLISTUSER: {
            state.listUsers = payload;
            return { ...state };
        }
        default:
            return state;
    }
}