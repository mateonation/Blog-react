import { LoaderFunction } from "react-router-dom";
import { PostResponse } from "../types/app";

const loader: LoaderFunction=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:PostResponse[]=await response.json();
    return posts.slice(0, 10);
};

const Home=()=><h2>Featured posts</h2>;

export default Home;