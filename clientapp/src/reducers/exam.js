import * as exam from "../contains/exam"
const initialState = {
 listTitleExam :[],
 examSelected:{}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case exam.GET_ALL_TITLE_EXAM: {
           console.log(payload);
            return { ...state, listTitleExam: payload.examTittleList}
        }
        case exam.GET_EXAM_BY_ID: {
           console.log(payload);
            return { ...state, examSelected: payload}
        }
        default:
            return state;
    }
}