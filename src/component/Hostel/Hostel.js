import React from 'react';
import "./Hostel.css";


function Hostel() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/hostel_form.pdf'; 
    link.download = 'hostel_form.pdf';
    link.click();
    window.alert("Form downloaded successfully!");
  }
  return (
    <>
    <div className="container-fluid px-0">
      <img
        src="/assets/hostel_banner.jpg"
        alt="Hostel Banner"
        className="img-fluid"
      />
    </div>
    <div className="facilities">
    <h1 className="text-center mt-5 mb-0">facilities</h1>
    <p className='text-center'>Nest Boys Hostel provides comfortable, well-furnished rooms and excellent meals. The hostel features a well-equipped library that fosters a studious environment. Conveniently, it is located within walking distance of JEC College, making daily commutes easy for students.</p>
    <div className="container mt-2">
      <div className="d-flex flex-wrap flex-md-nowrap flex-column flex-md-row">
        <div className="facility-container" data-aos="fade-left">
          <img src="/assets/hostel_h1.jpg" alt="facility 1" className="img-fluid" />
        </div>
        <div className="facility-container" data-aos="fade-up">
          <img src="/assets/hostel_h3.jpg" alt="facility 2" className="img-fluid" />
        </div>
        <div className="facility-container" data-aos="fade-right">
          <img src="/assets/hostel_h2.jpg" alt="facility 3" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
    <div className="facilities">
    <h1 className="text-center mt-5 mb-0">know more</h1>
    <div class="container mt-1">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="img-container">
                    <img src="/assets/hostel_h4.jpg" class="img-fluid" alt="Responsive Image" />
                </div>
            </div>
        </div>
    </div>
    </div>

    <div className="container mt-5 bace_heading">
      <h2 className="mt-4 text-center">Highlights Of Nest Boys Hostel</h2>
      <p className="mb-2 text-center">Check out accommodation & other facilities of our hostel</p>
      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/h1.jpeg" className="d-block w-100" alt="Slide 1"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/h2.jpeg" className="d-block w-100" alt="Slide 2"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/h4.jpeg" className="d-block w-100" alt="Slide 3"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/h5.jpeg" className="d-block w-100" alt="Slide 4"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/h6.jpeg" className="d-block w-100" alt="Slide 5"/>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>  
    
    
    <div class="container policy_heading mt-5" data-aos ="fade-up">
  <h1>rules and regulations</h1>
  
  
  <ul>
  <li>It's mandatory for the students to pay the Rent and Food Amount on or before 3rd of every month, if not 50/- extra will be added per day.</li>
        <li>It’s a 2-month bond to stay in the building premise and have to inform on notice before 15 days of leaving the room to the authority.</li>
        <li>Daily door closing time is 10:30 P.M., be sure to be inside before that. Fans and appliances must be OFF when you are not in the room.</li>
        <li>Personal hygiene is to be taken care of while using the bathroom or during taking food.</li>
        <li>No meat eating, alcohol, or any unhealthy environment will be tolerated and can lead to vacating the room on immediate notice.</li>
        <li>Any loud music, foul language in the hostel premise is prohibited, it is suggested to use headphones for music or any other videos.</li>
        <li>Must inform any authority about your leaving and coming as it is very important for security purposes.</li>
        <li>The library is there for study purposes, maintain the decorum of the room and sit on for study.</li>
        <li><strong>Documents to submit for identification:</strong> Aadhaar Card/Voter ID / License (Photocopy), passport size photo.</li>
        <li>Must care for your things in the hostel premise such as money, clothes, and necessary needful things. Authorities will not be responsible if any mischief happens.</li>

  </ul>
 <h2>concerning Incharges</h2>
  <ul>
    <li>Kitchen Details: 7477050046 (Mr. Pushpendra Godbole Sir)</li>
    <li>Accounts: 7772004746 (Mr. Ambikesh Bhargava Sir)</li>
  </ul>
  
  
</div>
<div className="facility-container">
      <div className="pdf-downloader-container" >
        <div className="pdf-downloader">
          <h1>hostel form</h1>
          <p>
            Thank you for your interest in <strong>Nest Boys Hostel.</strong> To
            access the complete form, please click the button below to download
            the form.
          </p>
          <button className="pdf-download-btn" onClick={handleDownload}>
            Download form
          </button>
        </div>
      </div>
    </div>


        </>
  );
}

export default Hostel;
