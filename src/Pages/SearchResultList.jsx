
import React,{useState} from 'react'

import CommonSection from './../shared/CommonSection'
import { Container,Col,Row } from 'reactstrap'

import { useLocation } from 'react-router-dom'
import Tourcard from '../shared/TourCard'

const SearchResultList = () => {

  const location =useLocation()

  const [data] = useState(location.state)

  console.log(data);
  return (
  <>

  <CommonSection title={"Tour Serach Result"} />
  <section>
    <Container>
      <Row>
        {
          data.length ==0 ?(
            <h4 className='text-center'>No tour found</h4>
          ) :  (
            data?.map(tour=>(
              <Col lg='3' className='mb-4' key={tour.id}>
                <Tourcard tour={tour}  />
              </Col>
            ))
          )
        }

      </Row>
    </Container>
  </section>
  
  </>
  )
}

export default SearchResultList
