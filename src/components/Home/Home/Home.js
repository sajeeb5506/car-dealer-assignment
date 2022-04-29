import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import ShortInventory from './ShortInventory/ShortInventory';
const Home = () => {
    return (
        <div>
            <Banner/>
            <ShortInventory/>
            
        </div>
    );
};

export default Home;