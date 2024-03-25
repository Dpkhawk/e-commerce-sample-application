import axios from "axios";

const fetchData = async (url) => {
  try{
  const result = await axios.get(url);
  return result.data;}
  catch{
    alert("invalid access ")
  }
};

export const deleteData = async (url) => {
  try{
  await axios.delete(url);
  }
  catch{
    alert("invalid access ")
  }
};
export const putData = async (url,data) => {
  try{
  await axios.put(url,data);
  }
  catch{
    alert("invalid access ")
  }
};
export const postData = async (url,data) => {
  try{
  await axios.post(url,data);
  }
  catch{
    alert("invalid access ")
  }
};
export default fetchData;
