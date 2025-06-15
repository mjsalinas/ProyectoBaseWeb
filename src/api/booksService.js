import axios from './axiosConfig';

export const getAllBooks= async () => {
    const response = await axios.get("/books/allBooks");
    return response.data;
}

export const createNewBook = async () => {
    return axios.post("/books/newBook");
}