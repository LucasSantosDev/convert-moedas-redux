import axios from "axios";

const api = axios.create({
  baseURL: "http://api.currencylayer.com/",
});

export default api;
