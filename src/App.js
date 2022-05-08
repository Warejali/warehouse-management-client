import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Blogs from './components/Home/Blogs/Blogs';
import EmailVerify from './components/Login/EmailVerify/EmailVerify';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import AddNewItems from './components/InventoryItems/AddNewItems/AddNewItems';
import ManageItems from './components/InventoryItems/ManageItems/ManageItems';
import InventoryItems from './components/InventoryItems/InventoryItems';
import MyItems from './components/InventoryItems/MyItems/MyItems';
import UpdateItem from './components/InventoryItems/UpdateItem/UpdateItem';
import Inventory from './components/InventoryItems/Inventory/Inventory';
import NotFound from './components/Shared/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/emailVerify' element={<EmailVerify></EmailVerify>}></Route>

  

        <Route path='/additems' element={
          <RequireAuth>
            <AddNewItems></AddNewItems>
          </RequireAuth>}>
        </Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>}>
        </Route>

        <Route path='/products' element={<InventoryItems></InventoryItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>

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
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
