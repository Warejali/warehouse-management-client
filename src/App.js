import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Login/Register/Register';
import EmailVerify from './Login/EmailVerify/EmailVerify';
import AddNewItems from './ManageInventories/AddNewItems/AddNewItems';
import ManageInventories from './ManageInventories/ManageInventories';
import Products from './Products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/emailVerify' element={<EmailVerify></EmailVerify>}></Route>
        <Route path='/ManageInventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/AddNewItems' element={<AddNewItems></AddNewItems>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
