import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './pages/Shared/Footer';
import Home from './pages/Home/Home'
import Blogs from './Blogs/Blogs';
import Header from './pages/Shared/Header';
import AllProducts from './Allproducts/AllProducts';
import Signup from './pages/Register/Signup';
import Buypage from './pages/BuyPage/Buypage';
import NotFound from './pages/Shared/NotFound';
import RequireAuth from './pages/Register/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import UserProfile from './pages/Dashboard/UserProfile';
import Payment from './pages/Dashboard/Payment';
import OrderAdmin from './pages/Dashboard/OrderAdmin';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProductAdmin from './pages/Dashboard/ManageProductAdmin';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import AllUsers from './pages/Dashboard/AllUsers';
import Authentication from './pages/Register/Authentication';
import './App.css';
import RequireAdmin from './pages/Register/RequireAdmin';

function App() {

  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Authentication></Authentication>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/buypage/:id' element={<RequireAuth><Buypage></Buypage></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='profile' element={<UserProfile></UserProfile>}></Route>
          <Route path='addreview' element={<RequireAuth><AddReview /></RequireAuth>}></Route>
          <Route path='myorders' element={<RequireAuth><MyOrders /></RequireAuth>}></Route>
          <Route path='payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
          <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='allorder' element={<RequireAdmin><OrderAdmin></OrderAdmin></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProductAdmin></ManageProductAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      </Routes >

      <Footer></Footer>
      <Toaster></Toaster>
    </div >
  );
}

export default App;
