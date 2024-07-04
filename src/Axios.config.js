import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:5000",
});

const myAxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    authorization: `Bearer ${localStorage.getItem("access-token")}`,
  
  },
  
});

export { myAxios, myAxiosSecure };
