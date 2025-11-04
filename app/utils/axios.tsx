import axios from "axios"


const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_SERVICE || 'http://localhost:4000/api',
    headers: {
        "Content-Type": "application/json",
    }
})

instance.interceptors.request.use((config) => {

    // config.headers.accsign = localStorage.getItem("accsign")
    // config.headers.acchd = localStorage.getItem("acchd")
const token = localStorage.getItem("token");
if (token && token !== "null" && token !== "undefined") {
  config.headers.Authorization = token.startsWith("Bearer ")
    ? token
    : `Bearer ${token}`;
} else {
  delete config.headers.Authorization; 
}
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    return response
}, (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
        // originalRequest._retry = true
        // const refreshToken = ""
        // return axios.post(`${process.env.NEXT_PUBLIC_USER_SERVICE}/auth/refresh`, {refreshToken}).then((res)=>{
        //     if(res.status === 200){
        //         return instance(originalRequest)
        //     }
        // })
        // window.location.href = "/login"
    }
    return Promise.reject(error)
})


export default instance