import axiosClient from "./config/axiosConfig";

export const categoryApi = {
    createCategory: async function (body:any){
        return await axiosClient.post("categories/create", body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    getAllCategory: async function () {
        return await axiosClient.get("categories/get-all");
    },
};