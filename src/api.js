import axios from "axios";

const URL = "https://swapi.co/api/";

export default axios.create({
  baseURL: URL
});
