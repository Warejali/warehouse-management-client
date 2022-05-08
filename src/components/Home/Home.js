import React from 'react';
import InventoryItems from '../InventoryItems/InventoryItems';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <InventoryItems></InventoryItems>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;