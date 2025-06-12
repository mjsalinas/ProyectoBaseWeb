import axios from "./axionConfig";

export const registerUser = async(email, password)=>{
    return axios.post("/auth/register",{email, password} );
}
export const loginUser = async(email, password)=>{
    return axios.post("/auth/singIn",{email, password} );
}