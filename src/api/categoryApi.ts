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
    getOneCategory: async function (id:string) {
        return await axiosClient.get(`categories/get-one/${id}`);
    },
    updateCategory: async function (body:any, id:string){
        return await axiosClient.put(`categories/update/${id}`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    deleteCategory: async function (id:string) {
        return await axiosClient.delete(`categories/delete/${id}`);
    },
};