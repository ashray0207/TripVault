/* 
import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5001/api",
});

export default API;
*/

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Automatically attach JWT token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;