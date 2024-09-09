import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customImg from '../assets/images/customization.png'

 const servicedata=[
  {
    imgUrl: weatherImg,
    title:"Calculate Weather",
    desc:"hey and hello everyone i am proud to welcome you",
  },

  {
    imgUrl: guideImg,
    title:"Best Tour to guide",
    desc:"hey and hello everyone i am proud to welcome you",
  },

  {
    imgUrl: customImg,
    title:"Customization",
    desc:"hey and hello everyone i am proud to welcome you",
  },
 ];
const ServiceList = () => {
  return  <>
  {servicedata.map((item,index)=>(
    <Col lg="3" key={index}>
      <ServiceCard item={item} />
    </Col>
  ))}
</>
}

export default ServiceList