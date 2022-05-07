import React, { useEffect, useState }  from 'react';
import Allcar from '../../Allcar/Allcar';


import './ManageItem.css'

const ManageItem = () => {

    const [items, setIrems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setIrems(data))
    
    },[]);


    return (
        <div>
         <h1 className='text-center my-5'>Our Inventoy Items</h1>
         <div  className='card-container mb-5'>
         {
                  items.map(item=><Allcar
                   key={item._id}
                    item={item}
                  ></Allcar>
                  
                  )
              }
         </div>
      
         
        </div>
    );
};

export default ManageItem;