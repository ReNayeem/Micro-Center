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
import Login from './Pages/Authentication/Login/Login';
import Authentication from './Pages/Authentication/Authentication';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { Toaster } from 'react-hot-toast';

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route> */}
        <Route path="/login" element={<Authentication></Authentication>}></Route>
        <Route path="/all-items" element={<AllItems></AllItems>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/item-detail" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        <Route path='/item/:itemId'
          element={
            user ? <ItemDetail></ItemDetail> : <Authentication></Authentication>
          }
        ></Route>
      </Routes>

      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
