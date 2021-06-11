import api from '../api/api'
import * as types from "../contains/examUpdate";
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
        console.log("delte");
        // const data = await api.Exam.deleteExam(id);
        dispatch({
            type: types.DELETE_Exam,
            payload: id,
        });

    } catch (error) {

    }
};

// export const updateExam = (value) => async (dispatch) => {
//     console.log("cek");
//     try {



//         const data = await api.Exam.updateExam(value);
//         dispatch({
//             type: types.UPDATE_EXAM,
//             payload: "",
//         });

//     } catch (error) {
//        throw error;
//     }
// };

export const updateExam = async (value) => {
    try {
        const data = await api.Exam.updateExam(value);
        // dispatch({
        //     type: types.UPDATE_EXAM,
        //     payload: "",
        // });

    } catch (error) {
        throw error;
    }
}

