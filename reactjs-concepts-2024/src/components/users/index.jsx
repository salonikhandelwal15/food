import {useState} from "react";
import {useEffect} from "react";
export default function Users(){

    const[usersList,setUsersList]=useState([]);
    const[pending,setPending]=useState(false);
    console.log("This file is in use.")
    async function fetchAllUsers(){
        try{
            setPending(true)
            const apiresponse = await fetch('https://dummyjson.com/users');
            const result=await apiresponse.json();
            if(result?.users){
                setUsersList(result?.users)
                setPending(false)
            }else{
                setUsersList([]);
                setPending(false)
            }

            console.log(result);

        }catch(error){
            console.log(error);
        }
    }

    //function handleFetchListOfUsers(){
      //  fetchAllUsers();
    //}

    //useEffect(()=>{
      //  fetchAllUsers();
    //},[]);

    console.log(usersList);

    if(pending) return<h1>Fetching users!Please wait</h1>;
    return (
    <div>
        <h1> All Users Lists</h1>
        <button onClick={fetchAllUsers}>Fetch Users List</button>
        <ul>
            {
                usersList && usersList.length > 0?
                usersList.map(userItem=> <li key={userItem?.id}>
                    <p>
                        {userItem?.firstName}{userItem?.lastName}
                        
                        </p>

                </li>):<h1>No users found! Please try again</h1>

                
            }
        </ul>
    </div>
    );
}