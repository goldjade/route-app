import axios from "axios";
// http://localhost:3000/api_key5000&hello
const instance = axios.create({
  baseURL: "http://localhost:3000",
  params: {
    api_: 5000,
    a: "hello",
  },
});
export default instance;
