import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyItems = () => {
    const [items, setItems]=useState([]);
//   let email= items.email;
const [user] = useAuthState(auth);
const email= user?.email;
    useEffect(()=>{
        const url=`http://localhost:5000/myitems?email=${email}`;
        console.log(url)
        fetch(url)
        
        .then(res=>res.json())
        .then(data=>setItems(data))
   
    },[]);
    console.log(email)
    return (
        <div>
            <h1>my items{items.length}</h1>

        </div>
    );
};

export default MyItems;