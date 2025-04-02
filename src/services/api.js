import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export function setAuth(token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
