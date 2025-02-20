import axiosClient from "./config/axiosConfig";

export const bannerApi = {

        createBanner: async function (body:any){
            const accessToken = window.localStorage.getItem('accessToken');
            return await axiosClient.post("banners/create", body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`,
                },
            }); 
        },
        getAllBanners: async function (accessToken?:string) {
            return await axiosClient.get("banners/get-all",
                {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        },
                        }   
            );
        },
        getOneBanner: async function (id:string,accessToken?:string) {
            return await axiosClient.get(`banners/get-one/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        },
                        }
            );
        },
        updateBanner: async function (body:any, id:string){
            const accessToken = window.localStorage.getItem('accessToken');
            return await axiosClient.put(`banners/update/${id}`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
        },
        deleteBanner: async function (id:string) {
            const accessToken = window.localStorage.getItem('accessToken');
                return await axiosClient.delete(`banners/delete/${id}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${accessToken}`,
                            },
                            }
                );
            },
}