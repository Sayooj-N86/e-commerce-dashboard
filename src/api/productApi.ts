import axiosClient from "./config/axiosConfig";

export const productApi = {

        createProduct: async function (body:any){
            const accessToken = window.localStorage.getItem('accessToken');
            return await axiosClient.post("products/create", body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
        },
        getAllProducts: async function (accessToken?:string) {
            return await axiosClient.get("products/get-all",
                {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        },
                        }
            );
        },
        getOneProduct: async function (id:string,accessToken?:string) {
            return await axiosClient.get(`products/get-one/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        },
                        }   
            );
        },
        updateProducts: async function (body:any, id:string){
            const accessToken = window.localStorage.getItem('accessToken');
            return await axiosClient.put(`products/update/${id}`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
        },
        featuredProduct: async function (id:string){
            const accessToken = window.localStorage.getItem('accessToken');
            return await axiosClient.put(`products/featured/${id}`,{},
                {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        },
                        }
            );
        },
        deleteProduct: async function (id:string) {
            const accessToken = window.localStorage.getItem('accessToken');
                return await axiosClient.delete(`products/delete/${id}`,
                     { 
                        headers: {
                            "Authorization": `Bearer ${accessToken}`,
                            },
                            }
                );
            },
}