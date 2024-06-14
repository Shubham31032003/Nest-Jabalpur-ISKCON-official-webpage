import React from 'react'
import './Donate.css'
function Donate() {
  return (
    <>
    <div class="container donation_heading">
        <div class="donation-container text-center">
            <h2>Support US</h2>
            <h4>पूजादीनां प्रवाहार्थं महापर्वस्वथान्वहम् ।<br />
            क्षेत्रापणपुरग्रामान् दत्त्वा मत्सार्ष्टितामियात् ॥५१॥</h4>
            <p><strong>One who offers the Deity gifts of land, markets, cities and villages so that the regular daily worship and special festivals of the Deity may go on continually will achieve opulence equal to My own.</strong></p>
            <p>Your generous donations help us continue our work and make a positive impact.</p>
            
            <div class="mb-4">
                <img src="/assets/qr_code.jpeg" alt="QR Code" class="qr-code"/>
                <p className='mt-3'>Scan the QR code to donate</p>
            </div>
            
            <h4>Banking Details</h4>
            <p><strong>Account Name:</strong> Shubham Gupta</p>
            {/* <p><strong>Account Number:</strong> 1234567890</p> */}
            <p><strong>UPI:</strong> 9303415303@ibl</p>
            <p><strong>Bank Name:</strong> Union Bank Of India</p>
            {/* <p><strong>IFSC Code:</strong> EXAMP12345</p> */}
        </div>
    </div>
    </>
  )
}

export default Donate
