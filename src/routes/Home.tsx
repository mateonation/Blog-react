import { LoaderFunction, useLoaderData } from "react-router-dom";
import { PostResponse } from "../types/app";

const loader: LoaderFunction=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:PostResponse[]=await response.json();
    return posts.slice(0, 10);
};

const Home=()=>{
    const posts=useLoaderData() as PostResponse[];
    return (<>
        <h2>Featured posts</h2>
        {
        posts.length===0?(
            <p className='no-items'>No posts.</p>
        ):(
            <p>There are {posts.length} posts.</p>
        )
        }
    </>
    );
};

Home.loader=loader;
export default Home;