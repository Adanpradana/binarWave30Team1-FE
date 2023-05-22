import axios from "axios";
import { errorToast } from "../globalToast";
import TokenService from "./token";
import { useNavigate } from "react-router-dom";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axios.create(config);

// error handler request error
api.interceptors.request.use(
  async (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    errorToast(error.response.data.msg);
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response !== undefined) {
      let response = error.response;
      if (response.status === 401) {
        localStorage.clear();
        window.location.reload();
      }
    }
    return Promise.reject(error);
  }
);

export default api;