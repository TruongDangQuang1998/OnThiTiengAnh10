import { combineReducers } from "redux";
import user from "./user"
import exam from "./exam"

const rootReducer =combineReducers({
    user,exam
});
export default rootReducer;