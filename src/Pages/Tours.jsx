import React, { useState,useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
// import NewsLetter from '../shared/NewsLetter'
import { Container, Row, Col } from 'reactstrap'
import tourData from '../assets/data/tours'
import NewsLetter from '../shared/NewsLetter'
import '../styles/tour.css'



const Tours = () => {

  const[pageCount,setPageCount] =useState(0)
  const[page,Setpage]=useState(0)

  useEffect(()=>{
    const pages= Math.ceil(5 /4) // here we use this for backend   .... here seil is used to round the numbers like 9.4 it will convert to 10
    setPageCount(pages)
  },[page])

  return (
    <>

      <CommonSection title={"All Tours"} />

      <section>
        <Container>
          <Row>

            <SearchBar  />
            
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>

         
            {tourData?.map(tour => (
              <Col lg='3' className='mb-4' key={tour.id}>
                <TourCard tour={tour} />
              </Col>

            ))}
           <Col lg='12'>

           <div className="page_count text-align-center d-flex justify-content-center gap-3">
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number}  onClick={() =>Setpage(number)}
                className={page==number?"active_page":""}>
                  {number+1}
                </span>
              ))}
            </div>
           </Col>
            
          </Row>
          </Container>
      </section>
      <NewsLetter />

      



    </>
  )
}

export default Tours
