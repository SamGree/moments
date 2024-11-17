import axios from "axios";

axios.defaults.baseURL = "https://drf-api-sam-c8393f26fa4b.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;