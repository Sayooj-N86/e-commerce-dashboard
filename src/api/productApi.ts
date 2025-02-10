import axiosClient from "./config/axiosConfig";

export const productApi = {

        createProduct: async function (body:any){
            return await axiosClient.post("products/create", body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        getAllProducts: async function () {
            return await axiosClient.get("products/get-all");
        },
        getOneProduct: async function (id:string) {
            return await axiosClient.get(`products/get-one/${id}`);
        },
        updateProducts: async function (body:any, id:string){
            return await axiosClient.put(`products/update/${id}`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        featuredProduct: async function (id:string){
            return await axiosClient.put(`products/featured/${id}`);
        },
        deleteProduct: async function (id:string) {
                return await axiosClient.delete(`products/delete/${id}`);
            },
}