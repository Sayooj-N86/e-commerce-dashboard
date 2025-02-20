import axiosClient from "./config/axiosConfig";

export const brandApi = {
    createBrand: async function (body:any){
        const accessToken = window.localStorage.getItem('accessToken');
        return await axiosClient.post("brands/create", body, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${accessToken}`,
            },
        });
    },
    getAllBrands: async function (accessToken?:string) {
        return await axiosClient.get("brands/get-all",
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    },
                    }
        );
    },
    getOneBrand: async function (id:string,accessToken?:string) {
        return await axiosClient.get(`brands/get-one/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    },
                    }
        );
    },
    updateBrand: async function (body:any, id:string){
        const accessToken = window.localStorage.getItem('accessToken');
        return await axiosClient.put(`brands/update/${id}`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${accessToken}`,
            },
        });
    },
    deleteBrand: async function (id:string) {
        const accessToken = window.localStorage.getItem('accessToken');
            return await axiosClient.delete(`brands/delete/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        },
                    }
            );
        },
};