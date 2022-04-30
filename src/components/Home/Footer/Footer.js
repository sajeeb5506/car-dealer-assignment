import React from 'react';

import './Footer.css'
const Footer = () => {
  
    return (
        <div className='footer-container'>
           
           <div className="about">
          <h2 className='banner-heading'> ABOUT US</h2>
           <p className='discription'>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers. type and bled it to make a type but also the leap into specimen book but also the leap into</p>
           </div>
           <div className="social-icon">
           <h2 className='banner-heading'> CONTUCT US</h2>
                <p className='discription'>Email:sajeebsarker5506@gmail.com</p>
                <p className='discription'>LinkeDin:Md.Sajeeb Sarker</p>
                <p className='discription'>Phone:+80170022002</p>
           </div>
           <div className="copy-right">
              <p className='discription'>©Copyright 2022 Car Dealer Developed by <span className='span'> Potenzaglobalsolutions</span></p>
               <p className='discription' >Privacy Policy | Terms And Conditions | Contact Us</p>
           </div>
        </div>
    );
};

export default Footer;