import AllProduct from './Component/AllProduct';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import AdminLogin from './Component/LoginPages/AdminLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserLogin from './Component/LoginPages/UserLogin';
import SupplierLogin from './Component/LoginPages/SupplierLogin';
import AdminRegister from './Component/RegisterPages/AdminRegister';
import Homepage from "./Component/Homepage1";
import { useState } from 'react';
import Adminpage from './Component/HomePage/Adminpage';
import SupplierRegister from './Component/RegisterPages/SupplierRegister';
import UserRegister from './Component/RegisterPages/UserRegister';
import Supplierpage from './Component/HomePage/Supplierpage';
import Userpage from './Component/HomePage/Userpage';
import BuyNow from './Component/BuyNow';



function App() {

  const [ login, setLoginUser] = useState({})
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/admin-login" component={AdminLogin} />  
        <Route exact path="/supplier-login" component={SupplierLogin} />
        <Route exact path="/supplier-register" component={SupplierRegister} />
        <Route exact path="/user-login" component={UserLogin} />
        <Route exact path="/user-register" component={UserRegister} />
        <Route exact path="/admin-register" component={AdminRegister} />
        <Route exact path="/admin-login" component={AdminLogin}/>
        <Route exact path="/supplier-page" component={Supplierpage}/>
        <Route exact path="/user-page" component={Userpage}/>
        <Route exact path="/admin-page" component={Adminpage}>
            {/* {
              login && login._id ? <Adminpage setLoginUser={setLoginUser} /> : <AdminLogin setLoginUser={setLoginUser}/>
            } */}
           </Route>        
        <Route exact path="/all" component={AllProduct} />
        <Route exact path="/" component={AllProduct} />
        <Route exact path="/add" component={AddProduct} />
        <Route exact path="/edit/:id" component={EditProduct} />
        <Route exact path="/buynow" component={BuyNow} />
        <Route component={NotFound} /> 
        {/* <AddProduct/>
        <AllProduct/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
