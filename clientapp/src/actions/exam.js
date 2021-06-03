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


