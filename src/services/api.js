import axios from 'axios';

const api = axios.create({
  baseURL: "https://sea-turtle-app-2-utosd.ondigitalocean.app",
});

export default api;