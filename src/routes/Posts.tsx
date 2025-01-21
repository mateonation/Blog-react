import { LoaderFunction, useLoaderData } from "react-router-dom";
import { PostResponse } from "../types/app";
import List from "../components/List";

const loader: LoaderFunction=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:PostResponse[]=await response.json();
    return posts;
};

const Posts=()=>{
    const posts=useLoaderData() as PostResponse[];
    return (<>
        <div className="index">
            <h2>All posts</h2>
            <p>Total posts: <span>{posts.length}</span></p>
        </div>
        {
        posts.length===0?(
            <p id='no-items'>No posts.</p>
        ):(
            <List items={posts.map(post=>({text:post.title,link:'/posts/${post.id}'}))} />
        )
        }
    </>
    );
};

Posts.loader=loader;
export default Posts;