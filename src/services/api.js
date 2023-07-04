import axios from 'axios';

const api = axios.create({
  baseURL: "http://adm.cromoconstrutora.com.br",
});

export default api;