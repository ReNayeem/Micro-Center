import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllItems from './Pages/AllItems/AllItems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import Register from './Pages/Authentication/Register/Register';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';
import Authentication from './Pages/Authentication/Authentication';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { Toaster } from 'react-hot-toast';
import AllReviews from './Pages/AllReviews/AllReviews';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import UserProfile from './Pages/Dashboard/UserProfile';

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Authentication></Authentication>}></Route>
        <Route path="/all-items" element={<AllItems></AllItems>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/item-detail" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/all-reviews" element={<AllReviews></AllReviews>}></Route>

        <Route path='/item/:itemId'
          element={
            user ? <ItemDetail></ItemDetail> : <Authentication></Authentication>
          }
        ></Route>

        <Route path='/dashboard' element={user ? <Dashboard /> : <Authentication></Authentication>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='add-review' element={<AddReview />}></Route>
          <Route path='user-profile' element={<UserProfile />}></Route>
        </Route>

      </Routes>

      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
