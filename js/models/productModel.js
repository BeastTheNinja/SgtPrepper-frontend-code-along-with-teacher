import { request } from "../services/fetch.js";

export const getList = async (category) => {
    const url = `http://localhost:4000/api/products/${category}`;
    console.log(url);
    
    const data = await request(url);
    return data;
}