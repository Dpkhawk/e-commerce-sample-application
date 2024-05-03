import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const fetchData = async (url) => {
  try{
    const results = await axios.get(url);
    return results.data;}
    catch{
      toast.error('Something Went Wrong')
    }
  
};
export const deleteData = async (url) => {
  try {
    await axios.delete(url);
  } catch {
    toast.error('Something Went Wrong')
  }
};
export const putData = async (url, data) => {
  try {
    await axios.put(url, data);
  } catch {
    toast.error('Something Went Wrong')
  }
};
export const postData = async (url, data) => {
  try {
    await axios.post(url, data);
  } catch {
    toast.error('Something Went Wrong')
  }
};
export default fetchData;
