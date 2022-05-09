import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Sociallogin from './SocialLogin/Sociallogin';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      

      let element;
      if (error) {
          element =
            <div>
              <p className='text-danger mt-2'>Error: {error.message}</p>
            </div>
          
        }

    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
     const location = useLocation();
     let from =location.state?.from?.pathname || '/inventory';
    const handelSubmit =event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigetRegester =event=>{

        navigate('/')
    }
    if(user){
        navigate('/');
        navigate(from,{replace:true});
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
const resetPassword= async()=>{
    const email = emailRef.current.value;
    if(email){
        await sendPasswordResetEmail(email);
        toast.success('Sent email');
    }
    else{
        toast.warn('please enter you eamil adderss')
    }
}


    return (
        <div className='container w-50 mx-auto my-5'>
           

            <Form  onSubmit={handelSubmit}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
            
             </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
              </Form.Group>
          
          {element}
             <Button
              variant="primary" type="submit">
             Login
            </Button>
            </Form>
            <p>New to Register ? <Link to="/regester" className='text-primary text-decoration-none ' onClick={navigetRegester} > Sign up</Link></p>
            <p>Forget Password ? <button  className='text-primary text-decoration-none btn  btn-link' onClick={resetPassword} > Reset Pasword</button></p>
           
            <Sociallogin/>
            <ToastContainer />
        </div>
    );
};

export default Login;