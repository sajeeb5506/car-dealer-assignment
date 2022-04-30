import React from 'react';
import AboutAutoImg from '../../Extra-section/About/AboutAutoImg';
import Sealsteam from '../../Extra-section/sales-team/Sealsteam';
import Banner from './Banner/Banner';
import './Home.css'
import ShortInventory from './ShortInventory/ShortInventory';
const Home = () => {
    return (
        <div >  
            <Banner/>
            <ShortInventory/>
            <AboutAutoImg/>
            <Sealsteam/>
        </div>
    );
};

export default Home;