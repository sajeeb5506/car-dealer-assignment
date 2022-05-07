import React, { useEffect, useState } from 'react';
import Shortitem from './Shortitem';
import './ShortInventory.css'
const ShortInventory = () => {
    const [items, setIrems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setIrems(data))
    
    },[]);

  const newItems= items.slice(0,6);
 
    return (
        <div>
        <h1 className='text-center my-5'>Our Inventoy Items</h1>
        <div  className='card-container2 mb-5'>
        {
                 newItems.map(item=><Shortitem
                  key={item._id}
                   item={item}
                 ></Shortitem>
                 
                 )
             }
        </div>
     
        
       </div>
        
    );
};

export default ShortInventory;