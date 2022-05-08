import React from 'react';
import './Shortitem.css';

const Shortitem = ({item}) => {


    const { _id,name,price,image,discrieption,quantity,supplier}=item;

    return (

        <div>
            <div className='card text-center'>

           <img  className='img' src={image} alt="" />
           <h2>{name}</h2> 
           <p>{discrieption}</p> 
            <h3> Price :${price}</h3> 
            <p> Quantity :{quantity}</p> 
            <p> supplier :{supplier}</p> 
            
          </div>
        </div>
    );
};

export default Shortitem;