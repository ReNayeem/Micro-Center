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
            <Trust></Trust>
            <Items></Items>
            <LimitedEdition></LimitedEdition>
            <Review></Review>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;