import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroimg from '../assets/images/hero-img01.jpg'
import heroimg02 from '../assets/images/hero-img02.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import experience from '../assets/images/experience.png'
import logo from '../assets/images/world.png' 

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../Featured-tours/FeaturedTourList'
import ImagesGallery from '../components/Galleryimages/ImagesGallery'
import Subtitile from '../shared/Subtitile'
import Testmonial from '../assets/Testmonial/Testmonial'
import NewsLetter from '../shared/NewsLetter'


const Home = () => {
  return (
    <>
                             {/* menu down sections tarts here  */}
<section>
      <Container>
        <Row>
         
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle">
                <div className='d-flex align-items-center  sub_img'>
                <Subtitile subtitle={'Know Before You Go'}/>
                <img className='logo_img' src={logo} alt="logo image is missing" />
                </div>
                
                <h1>Travelling opens the door to creating <span className='Highlight'>memories</span></h1>
                <p>Between vacations, many daydream about what adventures the next trip holds. You can spend your days switching back and forth from looking at your favorite travel photos to trying to go about your day to day life. But a few friendly reminders that the next adventure is closer than you think can help you put your wanderlust to rest. And one of the best distractions comes with this list of travel quotes. Pick your favorite from the collection below and use it to inspire your next trip!</p>
              </div>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero-img_box">
              <img src={heroimg} alt="" />
            </div>
          </Col>
      

          <Col lg='2'>
            <div className="hero-img_box mt-4">
              <video src={herovideo} alt=""  controls/>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero-img_box mt-5">
              <img src={heroimg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
      </section>
                                           {/* menu down sections tarts here  */}
     {/* servicelist section start here  */}
      <section>
       <Container>
       <Row>
        <Col lg="3">


<h5 className="services_subtitle">What We Serve</h5>
<h2 className='services_title'> we offer best services</h2>
        </Col>
        <ServiceList />
        </Row>
       </Container>
      </section>

      {/* tour-slides-img section starts here  */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className='mb-5'>
                <Subtitile subtitle={'Explore'} />       
                <h2 className="featured_class">Our features</h2>       
                </Col>
                <FeaturedTourList />
            </Row>
          </Container>
        </section>
  {/* tour-slides-img section ends here  */}




  {/* experience section starts here  */}
<section>
  <Container>
    <Row>
      <Col lg='6'>
<div className="experience_content">
  <Subtitile subtitle={'Experience'} />
  <h2>With all your Support <br />we will save you</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, est dignissimos laboriosam optio voluptate itaque deserunt facere repudiandae quia incidunt,<br /> tempore sit fugiat accusantium asperiores rem deleniti possimus laudantium vitae!</p>
</div>
<div className="detials_tour d-flex  gap-5">
 <div className='first_one'>
   <span>12K+</span>
   <p>Successful Trip</p>
 </div>

 <div className='first_one'>
   <span>2K+</span>
   <p>Regular Cilents</p>
 </div>

 <div className='first_one'>
   <span>15</span>
   <p>Year experience</p>
 </div>
</div>

      </Col>
      <Col lg='6'>

      <div className="experience_img">
        <img src={experience} alt="" />
      </div>
      </Col>
    </Row>
  </Container>
</section>


  {/* experience section ends here  */}

  {/* gallery section starts here  */}
 <section>
  <Container>
    <Row>
      <Col lg='12'>
      <Subtitile subtitle={"Gallary"} />
      <h2 className='gallery_heading'>Visit our gallery page</h2>
      </Col>
      <Col lg='12'>

      < ImagesGallery />
      </Col>
      
    </Row>
  </Container>
 </section>

{/* gallery section ends here  */}


{/* testmonial starts here  */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitile subtitle={'Fans Love'} />
        <h2 className='testmonial_title'>What our Fans say about us</h2>
      </Col>
      <Col lg='12'>
        <Testmonial />
      </Col>
    </Row>
  </Container>
</section>

{/* testmonial ends here  */}

 {/* newsletter section starts here  */}

 <NewsLetter />

 {/* newsletter section ends here  */}


    </>
      
     
    
    
  )
}

export default Home
