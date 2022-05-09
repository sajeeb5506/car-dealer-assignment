import React, { useEffect, useState } from 'react';
import Shortitem from './Shortitem';
import './ShortInventory.css'
import { Link } from 'react-router-dom';
const ShortInventory = () => {

    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setItems(data))
    
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
     
         <Link className='link-btn' to="/manageitems">Manage Inventory</Link> 
       </div>
        
    );
};

export default ShortInventory;