import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'
const Inventory = () => {
    const {id } = useParams();
   const [ubdate,setUbdate]=useState([]);
   useEffect(()=>{
         const url=`http://localhost:5000/cars/${id}`
         fetch(url)
         .then(res=>res.json())
         .then(data=>setUbdate(data))

   },[])
         const {name,image,discrieption,price,quantity,supplier,_id}=ubdate;
    return (
        <div>
        <div className="inventory-container">
        <div className="">
                <img  className='img' src={image} alt="" />
            </div>
            <div className="">
                <h1>Model : {name}</h1>
                <p>{discrieption}</p>
                <p className='text-danger'>Quantity :{quantity}</p>
                <p> Supplier :{supplier}</p>
                <p> Price :${price}</p>
                <p><button className='delever-btn'>Delivered</button></p>
            </div>
            <div className="">
                <input className='input-field my-3' type="number" placeholder='Quantity Ubdate' />
                <p><button className='delever-btn'>Quantity Ubdate</button></p>
            </div>
        </div>
        </div>
    );
};

export default Inventory;