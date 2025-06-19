import axios from './axiosConfig';

export const getALLRecipes=async()=>{
    const response= await axios.get("/recipes/allRecipes");
    return response.data;

}
export const createNewRecipes=async()=>{
    return axios.post("/recipes/newRecipes");
}
export const updatedRecipes = async (id, formData) => {
    return axios.put(`/recipes/updateRecipes/${id}`, formData);
}

export const deleteRecipes = async (id) => {
    return axios.delete(`/recipes/deleteRecipes/${id}`);
}