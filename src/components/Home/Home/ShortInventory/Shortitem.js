import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shortitem.css';

const Shortitem = ({item}) => {

  const nevigate= useNavigate();

  const navigateInventory = id =>{
      nevigate (`/inventory/${id}`)
  } 

    const { _id,name,price,image,discrieption,quantity,supplier}=item;

    return (

        <div>
            <div className='card text-center'>

           <img  className='img' src={image} alt="" />
           <h2>{name}</h2> 
           <p>{discrieption}</p> 
            <h3 > Price :${price}</h3> 
            <p className='text-danger'> Quantity :{quantity}</p> 
            <p> supplier :{supplier}</p> 
            <p><button className='delever-btn' onClick={()=>navigateInventory(_id)} >Ubdate</button></p>
          </div>
        </div>
    );
};

export default Shortitem;