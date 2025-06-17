import axios from './axiosConfig';

export const getALLRecetas=async()=>{
    const response= await axios.get("/recetas/allRecetas");
    return response.data;

}
export const createRecetas=async()=>{
    return axios.post("/recetas/newRecetas");
}
