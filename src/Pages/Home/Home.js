import { Link } from 'react-router-dom';
import Product from '../../Allproducts/Product';
import useData from '../../Hooks/useData';
import HomeReview from '../../Review/HomeReview';
import Loading from '../Shared/Loading';
import './Home.css'
import Banner from './Banner';
import Summary from './Summary';
import LimitedEdition from './LimitedEdition';
import Upcoming from './Upcoming';
import PageTitle from '../Shared/PageTitle';

const Home = () => {
    const [products] = useData()

    return (
        <div>
            <Banner></Banner>

            <div className='container mb-5'>
                <div id="items" className='container my-5'>
                    <div className="row mb-3">
                        <div id='items-title' className='upcoming'>
                            <h1>Featured Items</h1>
                            <hr />
                            <p>Get Your Desired Item from Featured Items</p>
                        </div>
                        {
                            products.length === 0 ? <Loading></Loading> : ''
                        }
                    </div>
                    <div className="items-container">
                        {
                            products.slice(0, 3).map(product => <Product more={2} key={product._id} product={product}></Product>)
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Link as={Link} to="allproducts">
                        <button className="banner-button">
                            <span> All Products </span>
                            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>

            <LimitedEdition></LimitedEdition>

            <Summary></Summary>

            <div>
                <div className=' my-5 '>
                    <div>
                        <h2>Customer Reviews</h2>
                        <hr />
                        <p>See our valuable new customers review</p>
                    </div>
                    <HomeReview></HomeReview>
                </div>
            </div>

            <div>
                <Upcoming></Upcoming>
            </div>
            <PageTitle title="Home"></PageTitle>
        </div>
    );
};

export default Home;