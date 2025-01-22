import { LoaderFunction, useLoaderData } from "react-router-dom";
import { PostResponse, UserResponse } from "../types/app";

const loader: LoaderFunction=async({params})=>{
    const responsePost=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post:PostResponse=await responsePost.json();
    const responseUser=await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user:UserResponse=await responseUser.json();
    return{
        post,
        postId:params.postId,
        user,
    };
};

const PostDetails=()=>{
    const {post,postId,user}=useLoaderData() as {post:PostResponse,postId:number,user:UserResponse;};
    if(Object.keys(post).length===0){
        return(
            <>
            <div className="index">
                <h2>No post found with id: {postId}</h2>
            </div>
            </>
        )
    }else{
        return (<>
            <div className="index">
                <h2>{post.title}</h2>
                <p>Posted by: <a href={`/users/${user.id}`}>{user.name}</a></p>
            </div>
            <p>{post.body}</p>
        </>
        );
    }
};

PostDetails.loader=loader;
export default PostDetails;