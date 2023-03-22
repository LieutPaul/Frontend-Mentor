import React from 'react'
import './OrderSummary.scss'

export default function OrderSummary() {
  return (
    <div className='root1'>
        <div class="flex-container-1">
            <div class="card">
            <img class="card-img-top" src="./images/illustration-hero.svg" alt="Card image cap" />
            <div class="mt-4 mb-2">
                <div class="card-title">Order Summary</div>
            </div>
            <div class="card-text">
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </div>
            <div class="flex justify-content-center">
                <div class="row plan-div mt-4 flex-container-3">
                <div class="col-3">
                    <img src="./images/icon-music.svg" class='img-fluid' alt="" />
                </div>
                <div class="col-sm-5 col-6 text-left">
                    Annual Plan <br/> $59.99/year
                </div>
                <div class="col-sm-4 col-3 text-right small-text">
                    Change
                </div>
                </div>
            </div>
            
            <div class="flex-container-2 mt-4">
                <button class="button">Proceed to Payment</button>
            </div>
            <div class="mt-3">
                <a href="#">Cancel Order</a>
            </div>
            </div>
        </div>

        
        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Vikas K</a>.
        </div>
    </div>
  )
}
