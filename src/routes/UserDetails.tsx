import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import { UserResponse } from "../types/app";

const loader: LoaderFunction=async({params})=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const user:UserResponse=await response.json();
    return {
        user,
        userId:params.postId,
    };
};

const UserDetails=()=>{
    const {user,userId}=useLoaderData() as {user:UserResponse,userId:number;};
    if(Object.keys(user).length===0){
        return(
            <>
            <div className="index">
                <h2>No user found with id: {userId}</h2>
            </div>
            </>
        )
    }
    const firstname=user.name.split(" ");
    return (<>
        <div className="index">
            <h2>{user.name}</h2>
        </div>
        <div className="userDetails">
            <p>User ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>URL: <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
            <Link id="viewUserPosts" to={`/posts/?userId=${user.id}`}>View {firstname[0]}'s posts</Link>
        </div>
    </>
    );
};

UserDetails.loader=loader;
export default UserDetails;