import axios from "axios";

const instance = axios.create({
    baseURL:"https://localhost:3001/api", // Replace with your API base URL;
    Headers:{
        contentType:"application/json",
    }}
)
export default instance;