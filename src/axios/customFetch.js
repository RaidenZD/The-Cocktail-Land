import axios from "axios";
import { BASE_URL } from "../utils/constants";

const fetchCocktails = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export default fetchCocktails;
