import React from 'react'
import './Kitchen.css'
import PdfDownloader from './PdfDownloader'
function Kitchen() {
  return (
    <>
    <div class="container-fluid mt-3">
  <div class="row">
    <div class="col-md-6 col-12 kitchen-container">
      <img src="/assets/jagannath_kitchen.png" class="img-fluid" alt="Responsive Image"/>
    </div>
    <div class="col-md-6 mt-3 kitchen_heading">
      <div class="content">
        <h1>Jagannath Kitchen</h1>
        <p>Jagannath Kitchen is a place where we serve <strong>Krishna Prasad</strong>, a special and delicious offering. It's not just about food; it's a way to connect with spirituality through taste. Our menu has a variety of dishes, each carefully prepared with love and devotion. Come taste the divine blessings at Jagannath Kitchen, where every bite is a treat for the soul.</p>
        <h1>Highlights</h1>
        <ul class="features">
          <li>Uncompromising taste</li>
          <li>Weekly one-day feast</li>
          <li>Variety of food: South Indian, North Indian, Chinese, and more</li>
          <li>Quality food at pocket-friendly prices</li>
          <li>Nourishment for the soul</li>
          <li>Spiritual ambiance</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="kitchen_heading mt-5">
  <h1>glimpse of Jagannath Kitchen</h1>
</div>
<div class="container mt-5 bace_heading" data-aos="fade-up">
    <div class="row">
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class='text-center'>
                <h4>यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषै ।<br />
                    भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् ॥ ३.१३ ॥</h4>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p class="text-center"><strong>The devotees of the Lord are released from all kinds of sins because they eat food which is offered first for sacrifice. Others, who prepare food for personal sense enjoyment, verily eat only sin.</strong></p>
            <p class="text-center"><strong>भगवान के भक्त सभी प्रकार के पापों से मुक्त हो जाते हैं, क्योंकि वे पहले यज्ञ में अर्पित किया गया भोजन खाते हैं। अन्य लोग, जो व्यक्तिगत इन्द्रियभोग के लिए भोजन बनाते हैं, वे केवल पाप ही खाते हैं।</strong></p>
        </div>
    </div>
</div>
<div class="gallery">
  <div class="gallery-item">
    <img src="/assets/k3.jpeg" alt="Jagannath Kitchen 1" />
  </div>
  <div class="gallery-item">
    <img src="/assets/k6.jpeg" alt="Jagannath Kitchen 2" />
  </div>
  <div class="gallery-item">
    <img src="/assets/k7.jpeg" alt="Jagannath Kitchen 3" />
  </div>
  <div class="gallery-item">
    <img src="/assets/k5.jpeg" alt="Jagannath Kitchen 4" />
  </div>
  <div class="gallery-item">
    <img src="/assets/k4.jpeg" alt="Jagannath Kitchen 5" />
  </div>
  
</div>
<PdfDownloader pdfPath={'/assets/kitchen_menu.pdf'} />

<div class="container policy_heading mt-5" data-aos ="fade-up">
  <h1>Policies of Jagannath Kitchen</h1>
  
  <h2>amount for prasadam</h2>
  <ul>
    <li>Full time 2500/- Monthly, for Morning/Evening One Time only - 1300/-.</li>
    <li>One Time Prasadam trail amount is Rs. 50 per plate only. </li>
    <li>Amount must be sent to the account provided by the 4
th of every month; Rs. 20 will be
imposed as a fine by each passing day. </li>
<li>On Ekadashi’s there will be only morning prasadam. If someone wants Ekadashi Prasadam
100 per meal will be charged and have to inform before a day</li>
  </ul>
  <div>
    <h2>timing</h2>
  <ul>
    <li>Prasadam timing must be followed strictly</li>
    <li>For Program days Prasadam's timing will be informed in the JK Group. </li>
    <li>Latecomers will not be entertained by the management team. If you arrive late the prasadam
will not be provided. (It is 100% your responsibility if you didn’t inform your late arrival) </li>
<li>Regarding OFFs, one must inform the WhatsApp group before the deadlines (Morning
before 6:00 AM and Night before 4:00 PM)</li>
  </ul>
  </div>
  
  
  <h2>Amount Settlement Structure</h2>
  <ul>
    <li>Continuous OFF of 2 days will be considered for refund other than that no consideration
will be made. Which will be Rs. 40 per plate.</li>
    <li>If OFF is more than 7 days in a month refundable about will be of one week only</li>
    <li>If the OFFs, are non-continuous they will not be considered </li>
    <li>If you have less than 20 days in attendance the amount will be settled by taking Rs. 50 per
plate for the Prasadam you have taken for that month. </li>
    <li>No money back will be done you have to complete your remaining plates </li>
    
  </ul>
  <h2>concerning Incharges</h2>
  <ul>
    <li>Kitchen Details: 7477050046 (Mr. Pushpendra Godbole Sir)</li>
    <li>Accounts: 7772004746 (Mr. Ambikesh Bhargava Sir)</li>
  </ul>
  
  
</div>



   

<div class="map-container mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.757736777925!2d{{longitude}}!3d{{latitude}}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5853c6ffccb9adcb!2sFrontier%20Bajaj!5e0!3m2!1sen!2s!4v1648599741235!5m2!1sen!2s" ></iframe>
        
    </div>
    <h3 className='kitchen_heading mt-3'>Location</h3>
    


    </>
  )
}

export default Kitchen

