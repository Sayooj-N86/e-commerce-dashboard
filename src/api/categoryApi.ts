import axiosClient from "./config/axiosConfig";

export const categoryApi = {
    createCategory: async function (body:any){
        const accessToken = window.localStorage.getItem('accessToken');
        return await axiosClient.post("categories/create", body, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${accessToken}`,
            },
        });
    },
    getAllCategory: async function (accessToken?:string) {
        return await axiosClient.get("categories/get-all",
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    },
             }
        );
    },
    getOneCategory: async function (id:string,accessToken?:string) {
        return await axiosClient.get(`categories/get-one/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    },
                    }
        );
    },
    updateCategory: async function (body:any, id:string){
        const accessToken = window.localStorage.getItem('accessToken');
        return await axiosClient.put(`categories/update/${id}`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${accessToken}`,
            },
        });
    },
    deleteCategory: async function (id:string) {
        const accessToken = window.localStorage.getItem('accessToken');
        return await axiosClient.delete(`categories/delete/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    },
            }
        );
    },
};