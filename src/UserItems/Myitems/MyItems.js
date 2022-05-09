import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import MyAllitem from './MyAllitem/MyAllitem';

const MyItems = () => {
    
    const [user] = useAuthState(auth);
    const email= user?.email;

    const [items, setItems]=useState([]);
    
    useEffect(()=>{
        const url=`https://safe-ravine-79811.herokuapp.com/myitems?email=${email}`;
       
        fetch(url)
        
        .then(res=>res.json())
        .then(data=>setItems(data))
   
    },[]);

  const handeldelete = id =>{

  const proceed = window.confirm('Are You Sure!');
  if(proceed){
    console.log('delet' , id);
    const url = `https://safe-ravine-79811.herokuapp.com/cars/${id}`;
    fetch (url, {
        method : 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            const remaining = items.filter(car=> car._id !== id)
            setItems(remaining);

        }
        console.log(data);
    })
  }

}
    return (
        <div >
            <h1 className='text-center my-5'>My Items</h1>
            <div className='card-container mb-5'>

            {
                items.map(item=><MyAllitem
                 key={item._id}
                 item={item}
                 handeldelete={handeldelete}
                ></MyAllitem>) 
             }
            </div>
           
        </div>
    );
};

export default MyItems;