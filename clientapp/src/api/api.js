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
        var url = `/SignUp?username=${data.userName}&name=${data.name}
        &password=${data.password}
        &confirmPassword=${data.confirmPassword}
        &userRoleId=1`;
        return await axios.post(url).then((res)=>res.data);
    },

    login: async (data) => {
        var url = `/Login?username=${data.userName}
        &password=${data.password}`;
        return await axios.get(url)
        .then((response)=> {
            if (response.status === 204) {
                return false;
            }
            return response.data
        });
    },

    getlistuser : async (data) => {
        return await axios.get("/api/User/listUser", config).then(r => { return r.data });
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
}
export default { User, Exam };