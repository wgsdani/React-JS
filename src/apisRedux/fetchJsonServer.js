import axios from "axios";

export const JsonServer = axios.create({
  baseURL: "http://localhost:3001",
});
