import axios from "axios";

export const createFetch = async () => {
  const response = await axios();
  return response;
};

export default createFetch;
