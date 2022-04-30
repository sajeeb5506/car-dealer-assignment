import React from 'react';
import './AboutAutoImg.css'
import img from '../../../image/extra-sec.jpg'

const AboutAutoImg = () => {
    return (
        <div>
            <h2 className='about-heading'>About AutoImage</h2>
            <div className="aboutImg-container">
                <div className="about-details">
              <h3>We offer high quality vehicles at unbelievable prices & creates pleasant buying experience.</h3>
              <p className='card-text'>AutoImage is nisi aliquip consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor sit amt consectetur adipisicing elit sed eiusmod tempor incididuntu labore et dolore magna aliqua enimad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip. Duis aute irure dolor in reprehenderitn voluptate velit ese cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>

                </div>
                <div className="">
                    <img  className='about-img' src={img} alt="" />
                </div>
            
            </div>
        </div>
    );
};

export default AboutAutoImg;