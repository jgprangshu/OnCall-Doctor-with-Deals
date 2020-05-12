import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './Redux/store';
import Home from './Components/Home/Home';
import { BrowserRouter,Route,Switch ,Redirect} from 'react-router-dom';
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import Coupons from './Components/Coupons/Coupons';
import axios from 'axios';
import Doctors from './Components/Doctor/Doctor';
import Admin from './Components/Admin/Admin';


function App() {
  axios.defaults.baseURL = 'http://localhost:3002/api'
  return (
    <Provider store={store}>
       <BrowserRouter> 
       <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Redirect to="/signin"/>}/>
        <Route exact path='/home' component={Home}/> 
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/coupons' component={Coupons}/>
        <Route exact path='/book-doctor' component={Doctors}/>
        <Route exact path='/admin-dashboard' component={Admin}/>
      </Switch>
      </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
