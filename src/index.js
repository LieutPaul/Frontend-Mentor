import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import SignupForm from './Components/SignUp-Form/SignupForm';
import TipCalculator from './Components/Tip-Calculator/TipCalculator';
import LandingPage from './Components/Landing-Page/LandingPage';
// import TitlePage from './TitlePage';
import JobListings from './Components/Job-Listings/JobListings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>

        <Route path="/" element=
        {
        <div style={{"padding":"20px"}}>
          <a href="/order-summary">/order-summary</a> : Order Summary Page
          <br></br>
          <a href="/signup-form">/signup-form</a> : Sign up Form
          <br></br>
          <a href="/tip-calculator">/tip-calculator</a> : Tip Calculator
          <br></br>
          <a href="/landing-page">/landing-page</a> : Landing Page
          <br></br>
          <a href="/job-listings">/job-listings</a> : Static Job Listings Page
        </div>
        } 
        />
        
        <Route path="/order-summary" element={<OrderSummary/>}/>
        <Route path="/signup-form" element={<SignupForm/>}/>
        <Route path="/tip-calculator" element={<TipCalculator/>}/>
        <Route path="/landing-page" element={<LandingPage/>}/>
        <Route path="/job-listings" element={<JobListings/>}/>
      </Routes>
    </Router>
);
