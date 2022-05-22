import React from 'react';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import Upcoming from './Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;