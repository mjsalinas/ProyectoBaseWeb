import axios from './axiosConfig';

export const getALLRecetas=async()=>{
    const response= await axios.get("/recetas/allRecetas");
    return axios.get("/recetas/allRecetas");

}
export const createRecetas=async()=>{
    return axios.post("/recetas/newRecetas");
}
