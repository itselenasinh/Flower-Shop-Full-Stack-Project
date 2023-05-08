import axios from "axios";

const authApi = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "https://api-database-flower.onrender.com/api",
});

export default authApi;
