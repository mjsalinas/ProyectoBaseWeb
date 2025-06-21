import axios from './axiosConfig';

export const getALLRecipes=async()=>{
    const response= await axios.get("/recipes/allRecipes");
    return response.data;

}
export const createNewRecipes=async(form)=>{
    return axios.post("/recipes/newRecipes", form);
}
export const updateRecipes = async (id, form) => {
    return axios.put(`/recipes/updateRecipes/${id}`, form);
}

export const deleteRecipes = async (id) => {
    return axios.delete(`/recipes/delete/${id}`);
}