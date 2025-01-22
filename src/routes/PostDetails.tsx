import { LoaderFunction, useLoaderData } from "react-router-dom";
import { PostResponse } from "../types/app";

const loader: LoaderFunction=async({params})=>{
    const responsePost=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post:PostResponse=await responsePost.json();
    return {
        post,
        postId:params.postId,
    };
};

const PostDetails=()=>{
    const {post,postId}=useLoaderData() as {post:PostResponse,postId:number;};
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
                <p>Posted by: </p>
            </div>
            <p>{post.body}</p>
        </>
        );
    }
};

PostDetails.loader=loader;
export default PostDetails;