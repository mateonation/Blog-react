import { LoaderFunction, useLoaderData } from "react-router-dom";
import { PostResponse } from "../types/app";

const loader: LoaderFunction=async({params})=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts${params.postId}`);
    const post:PostResponse=await response.json();
    return {
        post,
        postId:params.postId,
    };
};

const UserDetails=()=>{
    const {post,postId}=useLoaderData() as {post:PostResponse,postId:number;};
    if(Object.keys(post).length===0){
        return(
            <>
            <div className="index">
                <h2>No post found with id: {postId}</h2>
            </div>
            </>
        )
    }
    return (<>
        <div className="index">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    </>
    );
};

UserDetails.loader=loader;
export default UserDetails;