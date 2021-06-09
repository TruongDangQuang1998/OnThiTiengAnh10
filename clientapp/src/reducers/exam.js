import * as exam from "../contains/exam"
const initialState = {
 listTitleExam :[],
 getListResultUserByExamID:[],
 getListResultExamByUserID:[],
 examSelected:{}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case exam.GET_ALL_TITLE_EXAM: {
    
            return { ...state, listTitleExam: payload.examTittleList}
        }
        case exam.GET_EXAM_BY_ID: {
       
            return { ...state, examSelected: payload}
        }
        case exam.GET_LIST_USER_RESULT_BY_EXAM_ID: {
       
            return { ...state, getListResultUserByExamID: payload}
        }
        case exam.GET_LIST_EXAM_RESULT_BY_USER_ID: {
       
            return { ...state, getListResultExamByUserID: payload}
        }
        default:
            return state;
    }
}