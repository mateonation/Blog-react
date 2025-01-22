import { LoaderFunction, useLoaderData } from "react-router-dom";
import { PostResponse, UserResponse } from "../types/app";
import List from "../components/List";

const loader: LoaderFunction=async({request})=>{
    const responsePosts=await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:PostResponse[]=await responsePosts.json();
    const userId=new URL(request.url).searchParams.get('userId');
    const responseUser=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user:UserResponse=await responseUser.json();
    if(userId!=null){
        return{
            posts:posts.filter(post=>post.userId===+userId),
            user,
        }
    }else{
        return{
            posts,user
        }
    };
};

const Posts=()=>{
    const {posts,user}=useLoaderData() as {posts:PostResponse[],user:UserResponse};
    return (<>
        <div className="index">
            {user.name?(
                <h2>Posts made by {user.name}</h2>
            ):(
                <h2>All posts</h2>
            )}
            <p>Total posts: <span>{posts.length}</span></p>
        </div>
        {posts.length===0?(
            <p id='no-items'>No posts.</p>
        ):(
            <List items={posts.map(post=>({text:post.title,link:`/posts/${post.id}`}))} />
        )}
    </>
    );
};

Posts.loader=loader;
export default Posts;