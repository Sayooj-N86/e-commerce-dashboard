import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:5000/dashboard/api",
});
export default axiosClient;