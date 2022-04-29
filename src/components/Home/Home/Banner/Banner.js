import React from 'react';
import banner from '../../../../image/banner2.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container'>
          
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
         <div className="carousel-item active">
          <img className="d-block w-100" src={banner}alt="First slide"/>
          <div className="carousel-caption  ">
           <h2 className='banner-heading'>Improve your 
             Business with us </h2>
           <p>We provide the best solution for your car needs.  </p>
         </div>
         </div>
   
         </div>
        </div>
        <div className="">
          
        </div>
        </div>
    );
};

export default Banner;