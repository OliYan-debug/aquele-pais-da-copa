import axios from "axios";

const URL = "https://worldcup.cyclic.app";

const API = axios.create({
    baseURL: URL
});

export default API;