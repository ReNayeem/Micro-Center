import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllItems from './Pages/AllItems/AllItems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/all-items" element={<AllItems></AllItems>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/item-detail" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
