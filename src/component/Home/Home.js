import React from 'react'
import "./Home.css"
import Geeta from '../Shloka/Shloka'


function Home() {
  return (
    <>
    
    <div id="carouselExampleIndicators" class="carousel slide mt-3" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/nest_banner1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/assets/j1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/assets/j2.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/assets/nest_banner.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container-fluid mt-5 bace_heading"  >
        <div class="row">
            <div class="col-md-6 d-flex flex-column justify-content-center text-center" data-aos="fade-up">
                <h2>WELCOME TO NEST JABALPUR</h2>
                <p>
                Welcome to Nest Jabalpur! It's your cozy spot for diving into Krishna consciousness. Here, we're all about learning and living the teachings of Lord Krishna in a warm and welcoming atmosphere. Come join us for a dose of spiritual growth and community love!
                </p>
                <p className='text-center'><strong>Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare | Hare Rama Hare Rama Rama Rama Hare Hare ||</strong><br /></p>
                <div class="text-center  mb-3">
                <div class="text-center mt-3">
                <a href="/about" class="btn btn-custom me-3">Know More</a>
                <a href="/contact" class="btn btn-outline-custom">Contact Us</a>
      </div>
      </div>
                
            </div>
            <div class="col-md-6 jagannath" data-aos="fade-up">
                <img src="/assets/j6.jpeg" class="img-fluid" alt="Krishna Consciousness" />
                
            </div>
        </div>
    </div>

    <div class="container-fluid mt-3 bace_heading prabhupada" data-aos="fade-up">
        <div class="row">
            <div class="col-md-6 prabhupada">
                <img src="/assets/prabhupada.png" class="img-fluid" alt="Krishna Consciousness" />
                <p className='text-center'><strong>A. C. Bhaktivedanta Swami Prabhupada</strong><br />(founder acharya of ISKCON)</p>
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center text-center ">
                <h2>Srila Prabhupada</h2>
                <p>
                In the world history major changes took place because of a few people who actually lived by their ideals. Srila Prabhupada was one such person. A Holy man creates Holy places wherever he visits. Srila Prabhupada confirmed this statement in the modern times, especially in the western countries, where no one had ever heard of Lord Krishna before his arrival at New York. <br />
                <a href="https://gbc.iskcon.org/srila-prabhupada/" class="btn btn-outline-custom" target='_blank'> Read More</a>
                </p>
            </div>
            
        </div>
    </div>

<div class="container mt-5 services" data-aos="zoom-in">
  <h1 class="text-center mb-3">Our Services</h1>
  <p className='services'>Discover nourishment for body and soul at Jagannath Kitchen and find sanctuary at Nest Boys Hostel. Our mentorship program guides spiritual seekers on their journey. Join us for growth and enlightenment.</p>
  <div class="row">
    <div class="col-lg-3 col-md-6" data-aos="fade-up" >
      <div class="box d-flex flex-column align-items-center">
        <img src="/assets/jagannath_kitchen.jpg" class="img-fluid" alt="Team Member 1" />
        <h3 class="text-center mt-3 services">Jagannath Kitchen</h3>
        <a href="/kitchen" class="btn button">View Details</a>
      </div>
    </div>
    <div class="col-lg-3 col-md-6" data-aos="fade-up" >
      <div class="box d-flex flex-column align-items-center">
        <img src="/assets/boys_hostel_banner.jpg" class="img-fluid" alt="Team Member 2" />
        <h3 class="text-center mt-3">Nest Boys Hostel</h3>
        <a href="/hostel" class="btn button">View Details</a>
      </div>
    </div>
    <div class="col-lg-3 col-md-6" data-aos="fade-up" >
      <div class="box d-flex flex-column align-items-center">
        <img src="/assets/bace_poster.jpg" class="img-fluid" alt="Team Member 3" />
        <h3 class="text-center mt-3"> Join our <br />BACE</h3>
        <a href="/bace" class="btn button">View Details</a>
      </div>
    </div>
    <div class="col-lg-3 col-md-6" data-aos="fade-up" >
      <div class="box d-flex flex-column align-items-center">
        <img src="/assets/alumni_banner.jpg" class="img-fluid" alt="Team Member 4" />
        <h3 class="text-center mt-3">Alumni <br />Corner</h3>
        <a href="/alumni" class="btn button">View Details</a>
      </div>
    </div>
  </div>
</div> 
<div class="container mt-5 alumni_heading" data-aos="fade-up">
  <h2 class="text-center mb-4">TEACHINGS OF BHAGWAT GEETA</h2>
  
  
<div class="row">
    <div class="col-md-4" data-aos="fade-up">
    <div class="alumni-card text-center">
    <img src="/assets/dharma.png" class="img-fluid rounded-circle mb-3 bg-img mx-auto" alt="Alumni 1"/>
    <h4>DHARMA</h4>
    <p>The laws defined by Krishna are meant to bring us closer to Him and help us perform our constitutional dharma, which is to love God. By following these divine principles, we align ourselves with spiritual truths and deepen our connection with Krishna. </p>
    
</div>
    </div>
    <div class="col-md-4" data-aos="fade-up">
      <div class="alumni-card text-center">
        <img src="/assets/bhakti.jpg" class="img-fluid rounded-circle mb-3 bg-img mx-auto" alt="Alumni 2"/>
        <h4>BHAKTI</h4>
        <p>Bhakti refers to devotion and intense love towards a personal god, and in the case of Krishna, it involves a deep and loving connection with him. Bhagavad Gita emphasize the path of devotion as a powerful means to attain spiritual liberation.</p>
        
      </div>
    </div>
    <div class="col-md-4" data-aos="fade-up">
      <div class="alumni-card text-center">
        <img src="/assets/yoga.jpg" class="img-fluid rounded-circle mb-3 bg-img mx-auto" alt="Alumni 3"/>
        <h4>YOGA</h4>
        <p>This word comes from the root word yujya in Sanskrit which means <strong>"To Connect"</strong>. Yoga is the process by which we can connect to Krishna and there are different Yoga processes mentioned in Bhagavad Gita. Like Karma Yoga, Gyaan Yoga, Dhyaan Yoga and Bhakti Yoga etc.</p>
         
      </div>
    </div>
    
  </div>

  </div>
  <div class="join-now-container mt-5">
        <div class="join-content">
          <h3>Join our welcoming community and begin a meaningful spiritual journey. Learn about Lord Krishna's teachings, grow personally, and find inner peace.</h3>
            
          <a href="https://chat.whatsapp.com/Ctjum1oQ3xCJYuyVH5YPyB" class="join-now-btn" target="_blank" rel="noopener noreferrer">Join Now</a>
        </div>
    </div>
    <div class="container mt-5 bace_heading">
    <h1 class="text-center mb-2 ">Ecstatic Kirtan</h1>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/rtd9jz1aUrE?si=1ylvLsZgYo4WorF3" title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>


<Geeta /> 
{/* Calling the bhagwat geeta shloka popup message */}

 </>
  )
}

export default Home
