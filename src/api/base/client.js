import axios from "axios";
import { useAuthStore } from "@/stores/AuthStore";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const authStore = useAuthStore();
    if (authStore.accessToken) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      const authStore = useAuthStore();
      authStore.logout();
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
