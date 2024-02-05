import React, { useEffect,useState } from "react";

function Post(){
    const [error,setError] = useState();
    const [isLoaded,setisLoaded] = useState(false);
    const [users,setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
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
            <h1>Post Details</h1>
            <div>Userid: {users.userId}</div>
            <div>id: {users.id}</div>
            <div>Title: {users.title}</div>
            <div>Body: {users.body}</div>
        </div>
    )
}
}
export default Post;