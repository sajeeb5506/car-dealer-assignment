import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../Firebase/Firebase.init';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Sociallogin from '../Login/SocialLogin/Sociallogin';


const Regestation = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
      const navigate = useNavigate();
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');

    const handelSubmit =event=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }

    const navigetRegester =event=>{

        Navigate('/regester')
    }
    if(user){
        navigate('/');
    }
    return (
        <div className='container w-50 mx-auto my-5'>
            
            <Form onSubmit={handelSubmit} >
           <Form.Group className="mb-3" controlId="formBasicEmail">
             
              <Form.Control  ref={nameRef} type="name" placeholder="Enter Your Name" required />
              <Form.Text className="text-muted">

             </Form.Text>
             </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              
              <Form.Control  ref={emailRef} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
            
             </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
              
              <Form.Control  ref={passwordRef} type="password" placeholder="Password" required/>
             
          </Form.Group>
             <Button variant="primary" type="submit">
             Register
            </Button>
            </Form>
            <p>Already Register ? <Link to="/login" className='text-primary text-decoration-none '  > Login</Link></p>
            <Sociallogin/>
        </div>
    );
};

export default Regestation;