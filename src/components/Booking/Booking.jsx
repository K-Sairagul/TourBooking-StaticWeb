import React, { useState, useContext } from 'react'
import '../../styles/booking.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import {useNavigate} from 'react-router-dom'


const Booking = ({tour, avgRating}) => {
    const{price,reviews}=tour
    const navigate= useNavigate()
    const[credentials,setcredentials]=useState({
      userId:'01',
      userEmail:"example@gmail.com",
      fullName:"",
      phone:"",
      groupSize:1,
      bookat:""

    })
    const handlechange=e=>{
      setcredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const servicefee=10;
    const totalamount=Number(price)*Number(credentials.Guest)+Number(servicefee)
    const handleclick=e=>{
      e.preventDefault()

     navigate("/thank-you")

    }
  return <>
  <div className='main-container'>
  <div className="booking d-flex">
    <div className='d-flex align-items-center  gap-5'>
      <h3>${price} <span>/Per Person</span></h3>
      <span className='tour_location  gap-5 '>
        <i className="ri-star-line" ></i>
        {avgRating==0?null:avgRating} ({reviews?.length})
        </span>

    </div>
     {/* Booking form start  */}

     {/* Booking form end  */}  
    </div>
     <div className='booking-form'>
      <h5>Information</h5>
      <Form className='group_form' onSubmit={handleclick}>

        <FormGroup className='booking-info-form'>
           <input type='text' placeholder='Full Name' id="fullname" required onChange={handlechange} />
        </FormGroup>

        <FormGroup className='booking-info-form'>
           <input type='number' placeholder='Phone' id="phone" required onChange={handlechange} />
        </FormGroup>

        <FormGroup className='booking-info-form d-flex gap-5'>
           <input type='date' placeholder='Full Name' id="bookAt" required onChange={handlechange} />
            <input type='number' placeholder='Guest' id="Guest" required onChange={handlechange} />
        </FormGroup>

        <FormGroup className='booking-info-form'>
          
        </FormGroup>

      </Form>
     </div>

     {/* booking bottom starts  */}

     <div className="booking_bottom">
     <ListGroup>
      <ListGroupItem className='border-0'>
         <h5>${price}<i className="ri-close-line"></i>1 person</h5>
         <span>${price}</span>
      </ListGroupItem>

      <ListGroupItem className='border-0'>
         <h5>Service Charge</h5>
         <span>${servicefee}</span>
      </ListGroupItem>

      <ListGroupItem className='border-0'>
         <h5>$Total</h5>
         <span>${totalamount}</span>
      </ListGroupItem>
     </ListGroup>

     < button className='btn primary__btn w-100 mt-4' onClick={handleclick}>Book Now</button>
     </div>
     </div>
  </>
    
}

export default Booking
