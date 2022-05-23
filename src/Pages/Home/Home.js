import React from 'react';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import LimitedEdition from './LimitedEdition/LimitedEdition';
import Upcoming from './Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <LimitedEdition></LimitedEdition>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;