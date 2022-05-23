import React from 'react';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import LimitedEdition from './LimitedEdition/LimitedEdition';
import Review from './Review/Review';
import Trust from './Trust/Trust';
import Upcoming from './Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <LimitedEdition></LimitedEdition>
            <Trust></Trust>
            <Review></Review>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;