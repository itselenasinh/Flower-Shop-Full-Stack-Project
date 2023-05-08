import axios from "axios";

const authApi = axios.create({
  baseURL: "https://api-database-flower.onrender.com/api",
});

export default authApi;
