import React from 'react'
import { Card,CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/tour-card.css'
import calculateavgrating from '../utlis/avgRating' 


const TourCard = ({tour}) => {
  const {featured,city,reviews,title,photo,price,_id}= tour;

 const{totalRating,avgRating}= calculateavgrating(tour.reviews);
  
  return (
  <div className="tour_card ">
    <Card>
      <div className="tour_img  align-items-center gap-4 ">
        <img src={tour.photo} alt="" />
         {featured && <span>Featured</span>}
      </div>
      <CardBody>
      <div className="card_top d-flex text-align-center justify-content-between">
        <span className='tour_location '>
        <i className="ri-map-pin-line"></i> {city}
          
        </span>

        <span className='tour_location'>
        <i className="ri-star-line"></i>{avgRating==0?null:avgRating}
        {totalRating==0 ? "Not Rated" :  <span>({reviews.length})</span>}
         
        </span>
      </div>
      <h5 className='tour_title'>
      <Link to={`/tours/${_id}`}>{title}</Link></h5>
      console

      <div className="card_bottom d-flex justify-content-between gap-5">
        <h5>${price} <span> /Per Person</span></h5>
        <button className='booking_button'>
          <Link to={`/tours/${_id}`}> Book Now</Link>
          
        </button>
      </div>
    </CardBody>
    </Card>
 
 
    
  </div>
  
  );
}

export default TourCard  
