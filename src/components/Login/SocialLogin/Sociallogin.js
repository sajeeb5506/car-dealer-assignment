import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import './Sociallogin.css'
import logo from '../../../../src/image/Google__G__Logo.svg.png'
const Sociallogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const naviget = useNavigate();
 if(loading){
     return <loading/>
 }
 
    let element;
     if (error) {
         element =
           <div>
             <p>Error: {error.message}</p>
           </div>
         
       }
 
       if (user){
       naviget('/');
       }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div  style={{height:"2px"}} className="bg-primary w-50"></div>
                <p className='mt-2 px-3 text-bold'>or</p>
                <div style={{height:"2px"}} className="bg-primary w-50"></div>
            </div>
            <button 
               onClick={() => signInWithGoogle()}
            className='btn btn-info w-50 d-block mx-auto'>
                <img style={{height:'20px'}} src={logo} alt="" />
                <span className='px-2'>Google Sign In</span></button>
                <div className="  mt-3 text-danger  ">
                {element}
                </div>
        </div>
    );
};

export default Sociallogin;