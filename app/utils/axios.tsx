import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVICE || "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    // Remove authorization header for now since API doesn't require it
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Handle refresh or redirect
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
