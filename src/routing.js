import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './Component/Home/Home';
import Listing from './Component/listing/listing';
import Details from './Component/details/restDetails';
import PlaceOrder from './Component/Booking/placeOrder';
import ViewOrder from './Component/Booking/viewOrder';
import Login from '../src/Component/login/loginComponent';
import Register from '../src/Component/login/registerComponent';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                    <Route exact path="/" component={ Home } />
                    <Route path="/listing/:id" component={ Listing } />
                    <Route path="/details" component={ Details } />
                    <Route path="/placeOrder/:restName" component={ PlaceOrder } />
                    <Route path="/viewBooking" component={ ViewOrder } />
                    <Route path="/login" component={ Login } />
                    <Route path="/register" component={ Register } />
            <Footer/>
        </BrowserRouter>
        
    )
}

export default Routing;