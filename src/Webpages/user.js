import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function User(){
    const { id } = useParams();
    const [error,setError] = useState();
    const [isLoaded,setisLoaded] = useState(false);
    const [users,setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users/"+id)
        .then(res=>res.json())
        .then((data) => {
            console.log(data);
            setisLoaded(true);
            setUsers((data))
        })
        .catch((error) => {
            setisLoaded(true)
            setError(error)
        })
    },[])
    if(error){
        return(
            <div>Error message: {error.message}</div>
        )
    }
    else if(!isLoaded){
        return <h1>Loading..</h1>
    }
    else{
    return(
        <div>
            <h1>User Details</h1>
            <div>Name: {users.name}</div>
            <div>Email: {users.email}</div>
            <div>Phone: {users.phone}</div>
            <div>Website: {users.website}</div>
            <div>Address: </div>
            <div>Street:{users.address.street}</div>
            <div>{users.address.city}</div>
        </div>
    )
}
}
export default User
//<h3>ID:{id}</h3>