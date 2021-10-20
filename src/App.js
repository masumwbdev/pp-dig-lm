import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import HeadService from './Pages/Services/HeadService/HeadService';
import AllDoctors from './Pages/Home/Home/Doctor/AllDoctors';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import AllContact from './Pages/Contact/AllContact/AllContact';
import Footer from './Pages/Shared/Footer/Footer';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ServicesAppoinment from './Pages/Appoinment/ServicesAppoinment/ServicesAppoinment';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <HeadService></HeadService>
          </Route>
          <Route path="/doctors">
            <AllDoctors></AllDoctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/contact">
            <AllContact></AllContact>
          </Route>
          <Route path="/appoinment/:appoinmentId">
            <Appoinment></Appoinment>
            </Route>
          <Route path="/service/:serviceId">
            <ServicesAppoinment></ServicesAppoinment>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
