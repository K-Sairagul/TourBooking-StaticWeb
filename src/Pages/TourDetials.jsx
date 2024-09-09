import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, ListGroup, Form } from 'reactstrap';
import { useParams, useLocation } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateavgrating from '../utlis/avgRating';
import sai from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import NewsLetter from '../shared/NewsLetter';

const TourDetials = () => {
  const { id } = useParams();
 
 
  const q = new URLSearchParams(useLocation().search);
  const test = useParams();
  const reviewMsg = useRef('');
  const [tourrating, settourrating] = useState(null);

  // Find the tour with the specified ID
  const tour = tourData.find((tour) => tour.id === id);

  // Add a check to ensure that 'tour' is defined before destructuring its properties
  if (!tour) {
    return <div>Loading...</div>; // or handle the case when the tour is not found
  }

  const { photo, title, desc, price, reviews, city, distance, address, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateavgrating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsg.current.value;
    alert(`${reviewText},${tourrating}`);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour_content '>
                <img src={photo} alt='' />

                <div className='tour_info'>
                  <h1>{title}</h1>
                  <div className='d-flex'>
                    <span className='tour_location d-flex  '>
                      <i className='ri-star-line' style={{ color: 'var(--secondary-color)' }}></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not Rated' : <span>({tour.reviews.length})</span>}
                    </span>

                    <span className='map'>
                      <i className='ri-map-pin-2-fill'></i>
                      {address}
                    </span>
                  </div>

                  <div className='extra_detials '>
                    <span>
                      <i className='ri-money-dollar-box-fill'> ${price}/person</i>
                    </span>
                    <span>
                      <i className='ri-group-fill'></i>
                      {maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className='tour_reviews'>
                  <h4>Reviews({reviews?.length}reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                      <span onClick={() => settourrating(1)}>
                        1<i className='ri-star-fill'></i>
                      </span>
                      <span onClick={() => settourrating(2)}>
                        2<i className='ri-star-fill'></i>
                      </span>
                      <span onClick={() => settourrating(3)}>
                        3<i className='ri-star-fill'></i>
                      </span>
                      <span onClick={() => settourrating(4)}>
                        4<i className='ri-star-fill'></i>
                      </span>
                      <span onClick={() => settourrating(5)}>
                        5<i className='ri-star-fill'></i>
                      </span>
                    </div>

                    <div className='review_input'>
                      <input type='text' ref={reviewMsg} placeholder='feedback' />

                      <button className='btn primary__btn' type='sub'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user_review'>
                    {reviews?.map((review) => (
                      <div className='review_item d-flex' key={review.id}>
                        <img src={sai} alt='no image' style={{ width: '120px', height: 'auto' }} />
                        <div className='w-100'>
                          <div className='d-fles align-items-center'>
                            <div className='heading'>
                              <h5>Sai</h5>
                              <p>{new Date('1.10.2022').toLocaleDateString('en-US', options)}</p>
                            </div>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <h5>Amazing tour</h5>
                            <span className='d-flex justify-content-center'>
                              5<i className='ri-star-fill'></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default TourDetials;
