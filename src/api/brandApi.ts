import axiosClient from "./config/axiosConfig";

export const brandApi = {
    createBrand: async function (body:any){
        return await axiosClient.post("brands/create", body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    getAllBrands: async function () {
        return await axiosClient.get("brands/get-all");
    },
    getOneBrand: async function (id:string) {
        return await axiosClient.get(`brands/get-one/${id}`);
    },
    updateBrand: async function (body:any, id:string){
        return await axiosClient.put(`brands/update/${id}`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    deleteBrand: async function (id:string) {
            return await axiosClient.delete(`brands/delete/${id}`);
        },
};