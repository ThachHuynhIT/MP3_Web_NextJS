import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:8989/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (path: any, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};
export const post = async (path: any, options = {}) => {
  const response = await httpRequest.post(path, options);
  return response;
};
export const remove = async (path: any, options = {}) => {
  const response = await httpRequest.delete(path, options);
  return response;
};
export const put = async (path: any, options = {}) => {
  const response = await httpRequest.put(path, options);
  return response;
};
export default httpRequest;
