import axiosClient from "./config/axiosConfig";

export const authApi ={
    login: async function (body:any) {
     return await axiosClient.post('auth/login',body)
    },   
};