import React from 'react'
import '../styles/newsletter.css'
import maletourist from '..//assets/images/male-tourist.png'
import {Container, Row, Col} from 'reactstrap'

const NewsLetter = () => {
  return (
    <>
  <section className='main-cointainer'>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="news-letter">
            <h2>For More information contact us</h2>
         

          <div className="news_letter-input">
            <input type='email' placeholder='Enter your Email' />
            <button className='btn_newsletter'>Subscribe
            </button>
            

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi similique dignissimos excepturi unde sequi facere labore delectus voluptatum consequatur doloribus debitis quam eum mollitia consequuntur possimus, quaerat maxime totam!</p>
          </div>
        
        </Col>
        <Col lg='6'>
    <div className="newsletter_img">
      <img src={maletourist} alt="" />
    </div>

        </Col>
      </Row>
    </Container>
  </section>

    </>
   
  )
}

export default NewsLetter
