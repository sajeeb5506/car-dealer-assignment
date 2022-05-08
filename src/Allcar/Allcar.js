import React from 'react';
import { useNavigate } from 'react-router-dom';


import './Allcar.css';

const Allcar = ({item ,handeldelete}) => {
    const nevigate= useNavigate();

    const navigateInventory = id =>{
        nevigate (`/inventory/${id}`)
    } 
  
const { _id,name,price,image,discrieption,quantity,supplier}=item;

  
    return (
        <div className='card1'>

          <img  className='img' src={image} alt="" />
            <h2>{name}</h2> 
            <p>{discrieption}</p> 
            <h3> Price :${price}</h3> 
            <p> Quantity :{quantity}</p> 
            <p> supplier :{supplier}</p> 
            <p><button className='delete-btn' onClick={()=>handeldelete(_id)} >Delete</button></p>
            <p><button className='delever-btn' onClick={()=>navigateInventory(_id)} >Ubdate</button></p>
        
        </div>
    );
};

export default Allcar;