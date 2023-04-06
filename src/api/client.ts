import axios from "axios";

const baseURL: string = process.env.REACT_APP_BASE_URL as string;


const client = axios.create({ baseURL });


export default client;
