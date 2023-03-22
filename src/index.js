import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>

        <Route path="/" element=
        {
        <div style={{"padding":"20px"}}>
          <a href="/order-summary">/order-summary</a> : Order Summary Page
        </div>
        } 
        />
        <Route path="/order-summary" element={<OrderSummary/>}/>
      
      </Routes>
    </Router>
);
