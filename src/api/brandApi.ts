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
};