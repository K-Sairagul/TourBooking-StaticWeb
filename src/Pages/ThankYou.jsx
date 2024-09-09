import React from 'react'
import { Row,Col,Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thankyou.css'

const ThankYou = () => {

 
  return <>
  <section>
    <Container>
        <Row>
            <Col lg='12' className='text-center pt-5'>
                <div className="thank_you">
                    <span><i className="ri-checkbox-circle-line"></i></span>
                    <h1 className="mb-3 semibold">Thank you</h1>
                    <h3 className=''>Tour was booked</h3>
                    <button className='btn primary__btn'><Link to='/home'>Back to home</Link></button>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  </>
   
}

export default ThankYou
