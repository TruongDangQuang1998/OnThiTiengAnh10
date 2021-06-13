import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = "https://quangiuh.azurewebsites.net";
// axios.defaults.baseURL = "https://localhost:44329";

const config = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};
const showSuccess = (mess) => {
    toast.success(mess)
  };

  const showError = (mess) =>
  {
    toast.error(mess)
  };
const User = {
    register: async (data) => {
        // var url = `/SignUp?username=${data.userName}&name=${data.name}&password=${data.password}&confirmPassword=${data.confirmPassword}&userRoleId=2`;
        // return await axios.post(url).then((res)=>res.data);
        
        return await axios.post(`/SignUp`,data,config).then((response)=> {
            if (response.status === 200) {
                showSuccess("Đăng ký Thành công");
                return response.data
            }
            showError("Đăng ký Thất bại!");
                return false;
        });
    },

    login: async (data) => {
        var url = `/Login?username=${data.userName}&password=${data.password}`;
        return await axios.get(url)
        .then((response)=> {
            if (response.status === 200) {
                showSuccess("Đăng nhập Thành Công!");
                return response.data
            }
            showError("Đăng nhập Thất bại");
                return false;
        });
    },

    getUserList : async () => {
        return await axios.get("/GetUserListModel").then(r => { return r.data });
    },

    deleteUser : async (id) => {
        return await axios.delete(`/Delete?id=${id}`).then((response)=> {
            if (response.status === 200) {
                showSuccess("Xóa tài khoản thành công!");
                return response.data
            }
            showError("Xóa tài khoản thất bại");
                return false;
        });
    },
    resetPassworduser: async (id) => {
        return await axios.get(`/ResetPassword?userId=${id}`).then((response)=> {
            if (response.status === 200) {
                showSuccess("Reset Password thành công");
                return response.data
            }
            showError("Thất bại!");
                return false;
        });
    },

    changePassword : async (data) => {
        return await axios.post(`ChangePassword?userId=${data.userId}&newPassword=${data.newPw}`).then((response)=> {
            if (response.status === 200) {
                showSuccess("Đổi mật khẩu thành công");
                return response.data
            }
            showError("Thất bại!");
                return false;
        });
    },
    userCreate: async (data) => {
        // console.log(data);
        // var url = `/SignUp?username=${data.userName}&name=${data.name}&password=${data.password}&confirmPassword=${data.confirmPassword}&userRoleId=${data.userRoleId}`;
        // return await axios.post(url).then((res)=>res.data);
        return await axios.post(`/SignUp`,data,config).then((response)=> {
            if (response.status === 200) {
                showSuccess("Tạo tài khoản Thành công");
                return response.data
            }
            showError("Thất bại!");
                return false;
        });
    }
}
// const UserCreate = {
//     userCreate: async (data) => {
//         var url = `/SignUp?username=${data.userName}&name=${data.name}&password=${data.password}&confirmPassword=${data.confirmPassword}&userRoleId=2`;
//         return await axios.post(url).then((res)=>res.data);
//     }
// }
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
        return await axios.delete(`/DeleteExam?id=${id}`).then((response)=> {
            if (response.status === 200) {
                showSuccess("Xóa đề Thành công");
                return response.data
            }
            showError("Xóa đề Thất bại!");
                return false;
        });
    },
    updateExam : async (value) => {
        return await axios.put(`/UpdateExam`,value,config).then((response)=> {
            if (response.status === 200) {
                showSuccess("Câp nhập đề thi Thành công");
                return response.data
            }
            showError("Câp nhập đề thi Thất bại!");
                return false;
        });
    },
    insertExam : async (value) => {
        return await axios.post(`/Insert`,value,config).then((response)=> {
            if (response.status === 200) {
                showSuccess("Thêm đề thiThành công");
                return response.data
            }
            showError("Thêm đề thi thất bại Thất bại!");
                return false;
        });
    }
}
export default { User, Exam,  };