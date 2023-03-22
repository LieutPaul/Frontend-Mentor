import React from 'react';
import './OrderSummary.scss';
import image from './images/illustration-hero.svg';
import music_icon from "./images/icon-music.svg";
export default function OrderSummary() {
  return (
    <div className='order-summary'>
        <div className="flex-container-1">
            <div className="card">
            <img src={image} className="card-img-top" alt="Card cap" />
            <div className="mt-4 mb-2">
                <div className="card-title">Order Summary</div>
            </div>
            <div className="card-text">
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </div>
            <div className="flex justify-content-center">
                <div className="row plan-div mt-4 flex-container-3">
                <div className="col-3">
                    <img src={music_icon} className='img-fluid' alt="" />
                </div>
                <div className="col-sm-5 col-6 text-left">
                    Annual Plan <br/> $59.99/year
                </div>
                <div className="col-sm-4 col-3 text-right small-text">
                    Change
                </div>
                </div>
            </div>
            
            <div className="flex-container-2 mt-4">
                <button className="button">Proceed to Payment</button>
            </div>
            <div className="mt-3">
                <a href="/">Cancel Order</a>
            </div>
            </div>
        </div>

        
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/LieutPaul">Vikas K</a>.
        </div>
    </div>
  )
}
