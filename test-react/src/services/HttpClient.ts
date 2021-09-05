import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const request = {
  get: (url: string) => axios.get(url),
  post: (url: string, body: any) => axios.post(url, body),
  put: (url: string, body: any) => axios.put(url, body),
  delete: (url: string) => axios.delete(url),
};

export default request;
