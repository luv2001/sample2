import axios from "axios";

const url = "http://localhost:5500/posts/";

export const featchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
