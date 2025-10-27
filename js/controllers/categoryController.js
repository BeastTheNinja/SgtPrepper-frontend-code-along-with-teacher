import { getList } from "../models/categoryModel.js";

export const getCategoryList = async () => {
 const data = await getList();
 return data;
}