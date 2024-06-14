import React from 'react'
import './Gallery.css'
function Gallery() {
  return (
    <>
    <div className="container mt-5 gallery_heading">
        <h2 className='text-center mb-3 '>Gallery</h2>
        <p className="text-center mt-2">Immerse yourself in the vibrant atmosphere of Nest Jabalpur through our captivating gallery. Explore the rich tapestry of images that showcase the warmth, devotion, and spiritual essence of our community. </p>
    <div class="album">
  <div class="responsive-container-block bg">
    <div class="responsive-container-block img-cont">
      <img class="img" src="/assets/bace_b26.jpeg"/>
      <img class="img" src="/assets/bace_b16.jpeg" data-aos="fade-up"/>
      <img class="img img-last" src="/assets/bace_b28.jpeg" data-aos="fade-up"/>
    </div>
    <div class="responsive-container-block img-cont">
      <img class="img img-big" src="/assets/bace_b13.jpeg"/>
      <img class="img img-big img-last" src="/assets/bace_b11.jpeg" data-aos="fade-up"/>
      <img class="img img-big img-last" src="/assets/bace_b29.jpeg" data-aos="fade-up"/>
    </div>
    <div class="responsive-container-block img-cont">
      <img class="img" src="/assets/bace_b19.jpeg"/>
      <img class="img" src="/assets/bace_b25.jpeg"/>
      <img class="img" src="/assets/bace_b27.jpeg" data-aos="fade-up"/>
      <img class="img" src="/assets/bace_b30.jpeg" data-aos="fade-up"/>
    </div>
  </div>
</div>
    </div>
        </>
  )
}

export default Gallery
