import React from 'react';


import './Allcar.css';

const Allcar = ({item}) => {
const { _id,name,price,image,discrieption,quantity,supplier}=item;

  
    return (
        <div className='card'>

          <img  className='img' src={image} alt="" />
            <h2>{name}</h2> 
            <p>{discrieption}</p> 
            <h3> Price :${price}</h3> 
            <p> Quantity :{quantity}</p> 
            <p> supplier :{supplier}</p> 
           
        
        </div>
    );
};

export default Allcar;