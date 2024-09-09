import React from 'react'
import TourCard from '../shared/TourCard'
import { Col } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utlis/config'

const FeaturedTourList = () => {

  const {data: featuredtour,loading,error} =useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);
  console.log(featuredtour);
  return <>

  {
    loading && <h4>Loading............</h4>
  }

  {
    error && <h4>{error}</h4>
  }
  
  {!loading && !error && featuredtour ?.map(tour=>(
    <Col lg='3' className='mb-4' key={tour._id}>
    <TourCard tour={tour} />
    </Col>
    
  ))}
  
  </>
}

export default FeaturedTourList
