import { LoaderFunction, NavLink, useLoaderData } from "react-router-dom";
import { PostResponse } from "../types/app";
import List from "../components/List";

const loader: LoaderFunction=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:PostResponse[]=await response.json();
    return posts.slice(0, 10);
};

const Home=()=>{
    const posts=useLoaderData() as PostResponse[];
    return (<>
        <div className="index">
            <h2>Featured posts</h2>
            <NavLink to='/posts'>View all posts</NavLink>
        </div>
        {
        posts.length===0?(
            <p id='no-items'>No posts.</p>
        ):(
            <List items={posts.map(post=>({text:post.title,link:`/posts/${post.id}`}))} />
        )
        }
    </>
    );
};

Home.loader=loader;
export default Home;