import { LoaderFunction, useLoaderData } from "react-router-dom";
import { UserResponse } from "../types/app";
import List from "../components/List";

const loader:LoaderFunction=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await response.json();
    return users;
};

const Users=()=>{
    const users=useLoaderData() as UserResponse[];
    return (<>
        <div className="index">
            <h2>Users</h2>
            <p>Total users registered: <span>{users.length}</span></p>
        </div>
        {
            users.length===0?(
                <p id='no-items'>No users.</p>
            ):(
                <List
                    items={users.map(user=>({
                        text:`${user.name} (${user.email})`,
                        link:`/users/${user.id}`,
                    }))} 
                />
            )
        }
    </>);
};

Users.loader=loader;
export default Users;