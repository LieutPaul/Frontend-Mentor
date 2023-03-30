import React from 'react'
import qrcodeimg from './images/image-qr-code.png'

import './QRCode.scss'
export default function QRCode() {
    return (
        <div className='qr-page flex flex-column justify-center items-center'>
            <div className='qrcode row'>
                <div className='col-12'>
                    <img className='qrcodeimg img-fluid mt-3' src={qrcodeimg} alt="qrcode"/>
                </div>
                <div className='col-12 text-heading'>
                    Improve your front end skills by building projects
                </div>
                <div className='col-12 text'>
                    Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level
                </div>
            </div>
        </div>
    )
}
