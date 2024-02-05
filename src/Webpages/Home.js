import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home (){
    const [error,setError] = useState();
    const [isLoaded,setisLoaded] = useState(false);
    const [users,setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then((data) => {
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
                <ul>
                    {
                        users.map(user =>(
                            <li>
                                <Link to={`user/${user.id}`}>
                                {user.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default Home