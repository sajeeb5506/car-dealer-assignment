import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const AddItems = () => {
    const [user] = useAuthState(auth);
 
    const { register, handleSubmit, watch, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://safe-ravine-79811.herokuapp.com/cars`;
          fetch(url, {
              method:'POST',
              headers: {
                  'content-type':'application/json'
              },
              body: JSON.stringify(data)
          })
           .then(res=>res.json())
           .then(result=> {
               console.log(result);
           } )
           
           reset();
    };


    
    return (
   <div className="w-50 mx-auto">
       <h1 className='text-center my-3'>Add New Item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
 
 

 <input className='mb-2 input-field'  placeholder='Name'{...register("name", { required: true })} />

 <input className='mb-2 input-field'  defaultValue={user.email} {...register("email",{ required: true })} />

 <textarea className='mb-2 input-field'  placeholder='Discrieption'{...register("discrieption", { required: true })} />
 <input className='mb-2 input-field'  placeholder='Price' type='number' {...register("price", { required: true })} />
 <input className='mb-2 input-field'  placeholder='Img Url'{...register("image", { required: true })} />
 <input className='mb-2 input-field'  placeholder='Quantity'type='number'  {...register("quantity", { required: true })} />
 <input className='mb-2 input-field'  placeholder='Supplier Name' {...register("supplier", { required: true })} />

 {errors.exampleRequired && <span>This field is required</span>}
 
 <input  className='mb-3 input-field' type="submit" value='Add Item' />
</form>
   </div>
    );
};

export default AddItems;