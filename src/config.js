import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mapishbackend.herokuapp.com/reigon/",
});
