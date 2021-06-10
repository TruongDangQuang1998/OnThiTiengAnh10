import axios from "axios";

axios.defaults.baseURL = "https://quangiuh.azurewebsites.net";

const config = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};
const User = {
    register: async (data) => {
        var url = `/SignUp?username=${data.userName}&name=${data.name}&password=${data.password}&confirmPassword=${data.confirmPassword}&userRoleId=2`;
        return await axios.post(url).then((res)=>res.data);
    },

    login: async (data) => {
        var url = `/Login?username=${data.userName}&password=${data.password}`;
        return await axios.get(url)
        .then((response)=> {
            if (response.status === 204) {
                return false;
            }
            return response.data
        });
    },

    getUserList : async () => {
        return await axios.get("/GetUserListModel").then(r => { return r.data });
    },

    deleteUser : async (id) => {
        return await axios.delete(`/Delete?id=${id}`).then(r => { return r.data });
    },
    resetPassworduser: async (id) => {
        return await axios.get(`/ResetPassword?userId=${id}`).then(r => { return r.data });
    },

    changePassword : async (data) => {
        return await axios.post(`ChangePassword?userId=${data.userId}&newPassword=${data.newPw}`).then(r => { return r.data });
    }
}
const UserCreate = {
    userCreate: async (data) => {
        var url = `/SignUp?username=${data.userName}&name=${data.name}&password=${data.password}&confirmPassword=${data.confirmPassword}&userRoleId=2`;
        return await axios.post(url).then((res)=>res.data);
    }
}
const Exam = {
    getAlltitle: async () => {
        var url = `/ExamGetAllTittle`;
        return await axios.get(url).then((res) => res.data);
    },

    getExamById: async (data) => {
        var url = `/ExamGetById?id=${data.examId}&userId=${data.userId}`;
        return await axios.get(url).then((res) => res.data);
    },
    getListUserExamById: async (id) => {
        var url = `GetExamResultByExamId?examId=${id}`;
        return await axios.get(url).then((res) => res.data);
    },
    getListExamByUserId: async (id) => {
        var url = `/ExamGetAll?userId=${id}`;
        return await axios.get(url).then((res) => res.data);
    },
    deleteExam : async (id) => {
        return await axios.delete(`/DeleteExam?id=${id}`).then(r => { return r.data });
    },
    updateExam : async (id) => {
        return await axios.delete(`/UpdateExam?id=${id}`).then(r => { return r.data });
    },
    insertExam : async (id) => {
        return await axios.delete(`/InsertExam?id=${id}`).then(r => { return r.data });
    }
}
export default { User, Exam };