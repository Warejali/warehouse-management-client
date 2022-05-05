import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Login/Register/Register';
import EmailVerify from './Login/EmailVerify/EmailVerify';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import InventoryItems from './InventoryItems/InventoryItems';
import UpdateItem from './InventoryItems/UpdateItem/UpdateItem';
import ManageItems from './InventoryItems/ManageItems/ManageItems';
import AddNewItems from './InventoryItems/AddNewItems/AddNewItems';
import Inventory from './InventoryItems/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/emailVerify' element={<EmailVerify></EmailVerify>}></Route>

  

        <Route path='/additems' element={
          <RequireAuth>
            <AddNewItems></AddNewItems>
          </RequireAuth>}>
        </Route>
        <Route path='/manageproducts' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>}>
        </Route>

        <Route path='/products' element={<InventoryItems></InventoryItems>}></Route>

        <Route path='/update/:id' element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>}>
        </Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}>
        </Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
