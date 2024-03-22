import axios from "axios";

const fetchData = async (url) => {
  try{
  const result = await axios.get(url);
  return result.data;}
  catch{
    alert("invalid access ")
  }
};

export default fetchData;
