import axios from "axios";
import { BASE_URL } from ".";

const defaultOptions = {
  baseURL: BASE_URL,
};

// Create axios instance
export const Axios = axios.create(defaultOptions);
