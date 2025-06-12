import axios from "axios";

// npm install axios

const instance = axios.create({
    baseURL: "http://localhost:3001/api/auth",
    headers:{
        "Content-Type" : "application/json",

    }
});
export default instance;