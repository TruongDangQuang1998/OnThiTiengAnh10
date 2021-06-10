import api from '../api/api'
import * as types from "../contains/exam";
import history from '../history';


export const getAllTitlExam = () => async (dispatch) => {
    try {
        const data = await api.Exam.getAlltitle();
       
        dispatch({
            type: types.GET_ALL_TITLE_EXAM,
            payload: data,
        });

    } catch (error) {

    }
};

export const getExamById = (value) => async (dispatch) => {
    try {
        const data = await api.Exam.getExamById(value);
       
        dispatch({
            type: types.GET_EXAM_BY_ID,
            payload: data,
        });

    } catch (error) {

    }
};
export const delete_exam = (id) => async (dispatch) => {
    try {
        const data = await api.Exam.deleteExam(id);
        dispatch({
            type: types.DELETE_Exam,
            payload: id,
        });
       
    } catch (error) {
       
    }
};

export const updateExam = (id) => async (dispatch) => {
    try {
        const data = await api.Exam.updateExam(id);
        dispatch({
            type: types.UPDATE_EXAM,
            payload: id,
        });
       
    } catch (error) {
       
    }
};

export const getListUserByExamID = (id) => async (dispatch) => {
    try {

        const data = await api.Exam.getListUserExamById(id);
        dispatch({
            type: types.GET_LIST_USER_RESULT_BY_EXAM_ID,
            payload: data,
        });

    } catch (error) {

    }
};
export const getListExamByUserID = (id) => async (dispatch) => {
    try {

        const data = await api.Exam.getListExamByUserId(id);
        dispatch({
            type: types.GET_LIST_EXAM_RESULT_BY_USER_ID,
            payload: data,
        });

    } catch (error) {

    }
};