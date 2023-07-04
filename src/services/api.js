import axios from 'axios';

const api = axios.create({
  baseURL: "https://adm.cromoconstrutora.com.br",
});

export default api;