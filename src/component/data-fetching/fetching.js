import axios from "axios";

const fetchData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

export default fetchData;
