import React, { useEffect, useState } from 'react';


import { useParams } from 'react-router-dom';

import './Inventory.css'
const Inventory = () => {

    const {id } = useParams();

   const [ubdateproduct,setUbdate]=useState([]);

   useEffect(()=>{
         const url=`http://localhost:5000/cars/${id}`
         fetch(url)
         .then(res=>res.json())
         .then(data=>setUbdate(data))

   },[]);

 const {name,image,discrieption,price,quantity,supplier,_id }=ubdateproduct;

// ubdate
const handleUpdateUser = event =>{
    event.preventDefault();
    const curentquantity = parseInt(event.target.quantity.value);
    

    const updateQuantity = curentquantity ;

    let previousQuentity = parseInt(quantity);

    if(previousQuentity>0){
        ubdateproduct.quantity=previousQuentity + updateQuantity;
        setUbdate({...ubdateproduct})
    }
const quantities=ubdateproduct.quantity;

console.log(quantities);
    // send data to the server
    const url =`http://localhost:5000/cars/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({quantities:quantities})
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        ubdateproduct.quantity = quantities;
        setUbdate({...ubdateproduct})
        alert('users added successfully!!!');
        event.target.reset();
    })
}
// delever
const handeldelever=(id)=>{
    console.log(id)
    const url=`http://localhost:5000/cars/${id}`;
 console.log(ubdateproduct.quantity)

 if(ubdateproduct.quantity > 0 ){

    ubdateproduct.quantity= ubdateproduct.quantity - 1 ;
    setUbdate({...ubdateproduct})

 }
else{
    console.log('nooo');
}
const deleverquentity = ubdateproduct.quantity;
console.log(deleverquentity);
fetch (url,{
    mathod :'PUT',
    headers:{ 'content-type':'application/json'},
    body: JSON.stringify(deleverquentity)


})

.then(res=>res.json())
.then(data=>{
    console.log(data);
    ubdateproduct.quantity=deleverquentity;
    setUbdate({...ubdateproduct})
})

}

    return (

        <div>
        <div className="inventory-container">
        <div className="box">
                <img  className='img' src={image} alt="" />
            </div>
            <div className="box">
                <h1>Model : {name}</h1>
                <p>{discrieption}</p>
                <p className='text-danger'>Quantity :{quantity}</p>
                <p> Supplier :{supplier}</p>
                <p> Price :${price}</p>
                <p><button onClick={()=>handeldelever(_id)} className='delever-btn'>Delivered</button></p>
            </div>
            <form onSubmit={handleUpdateUser} className="box" >

                <input className='mb-2 input-field'  placeholder='Quantity' name="quantity"  />
           

                <input className=' my-3 delever-btn' type="submit" value='Quantity Ubdate' />
           

            </form>
        </div>
        </div>
    );
};

export default Inventory;