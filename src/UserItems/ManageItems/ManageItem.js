import React, { useEffect, useState }  from 'react';
import Allcar from '../../Allcar/Allcar';


import './ManageItem.css'

const ManageItem = () => {

    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setItems(data))
    
    },[]);

    const handeldelete = id =>{

        const proceed = window.confirm('Are You Sure!');
        if(proceed){
          console.log('delet' , id);
          const url = `http://localhost:5000/cars/${id}`;
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
        <div className='grid-container'>
         <h1 className='text-center my-5'>Our Inventoy Items</h1>
         <div  className='card-container mb-5'>
         {
                  items.map(item=><Allcar
                   key={item._id}
                    item={item}
                    handeldelete={handeldelete}
                  ></Allcar>
                  
                  )
              }
         </div>
      
         
        </div>
    );
};

export default ManageItem;