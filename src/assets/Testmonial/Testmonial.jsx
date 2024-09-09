import React from 'react';
import '../../styles/testmonial.css'
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active first-cover" data-bs-interval="4000">
          <h4>Sairagul</h4>
          <center><img src={ava01} className="d-block " alt="image-missing" /> </center>
          <p>such a wonderful website everything is cute and clear, I loved this.</p>
        </div>
        <div className="carousel-item first-cover" data-bs-interval="4000">
          <h4>Tharun</h4>
          <center><img src={ava02} className="d-block " alt="image-missing" /> </center>

          <p>Hey guys, I loved this tourist place and it looks good and awesome.</p>
        </div>
        <div className="carousel-item first-cover">
          <h4>SivaMoorthi</h4>
          <center><img src={ava03} className="d-block " alt="image-missing" /> </center>

          <p>No word to say, such an amazing website I've ever seen.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Testimonial;
