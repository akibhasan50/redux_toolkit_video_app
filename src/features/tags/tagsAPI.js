import axios from "../../utils/axios";

export const getTags = async () => {
  const response = await axios.get("/tags");
  console.log(response.data);
  return response.data;
};
