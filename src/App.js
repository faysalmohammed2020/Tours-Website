
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/Notfound/Notfound';
import About from './Components/About/About';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';
import MyOrder from './Components/MyOrder/MyOrder';
import Shipping from './Components/Shipping/Shipping';
import ManageOrder from './Components/ManageOrder/ManageOrder';



function App() {
  return (
    <div>
     
      <AuthProvider>
      <BrowserRouter>
          <Header></Header>
      <Switch>
        <Route exact path ="/">
        <Home></Home>
        </Route>
        <Route exact path = "/Home">
         <Home></Home>
        </Route>
        <Route exact path = "/addService">
         <AddService></AddService>
        </Route>
        <PrivateRoute path = "/About">
         <About></About>
        </PrivateRoute>
        <PrivateRoute path = "/MyOrder">
         <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute path = "/ManageOrder">
         <ManageOrder></ManageOrder>
        </PrivateRoute>
        
        <PrivateRoute exact path ="/Contact"> 
        <Contact></Contact>
        </PrivateRoute>
        <PrivateRoute exact path ="/Shipping"> 
        <Shipping></Shipping>
        </PrivateRoute>
        <Route exact path ="/Register"> 
        <Register></Register>
        </Route>
        <Route exact path ="*"> 
        <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
