import axios from "axios";

let token = localStorage.getItem("token") || null;

const API = axios.create({
  baseURL: "https://memory-app-backend.onrender.com",
  headers: {
    Authorization: `Bearer ${token}`,
    
  },
});

export default API;
