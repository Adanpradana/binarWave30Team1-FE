import axios from "axios";
import { errorToast } from "../globalToast";
import TokenService from "./token";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const api = () => {
  return axios.create(config);
};

// error handler request error
api.interceptors.request.use(
  async (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => errorToast(error.response.data.msg)
);

api.interceptors.response.use(
  async (response) => response,
  (error) => errorToast(error.response.data.msg)
);

export default api;
