import axiosClient from "./config/axiosConfig";

export const bannerApi = {

        createBanner: async function (body:any){
            return await axiosClient.post("banners/create", body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        getAllBanners: async function () {
            return await axiosClient.get("banners/get-all");
        },
        getOneBanner: async function (id:string) {
            return await axiosClient.get(`banners/get-one/${id}`);
        },
        updateBanner: async function (body:any, id:string){
            return await axiosClient.put(`banners/update/${id}`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        deleteBanner: async function (id:string) {
                return await axiosClient.delete(`banners/delete/${id}`);
            },
}