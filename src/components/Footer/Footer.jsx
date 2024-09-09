import React from 'react'
import '../Footer/footer.css'
import {Container,Row,Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'



const quick_links=[
  {path:"/home",
  display:"Home"},
  {
    path:"/about",
    display:"About"
 },
 {
  path:"/tours",
  display:"Tours"
 }
] ;


const quick_links2=[
  {path:"/gallery",
  display:"Gallery"},
  {
    path:"/login",
    display:"Login"
 },
 {
  path:"/register",
  display:"Register"
 }
] ;


const Footer = () => {

  const year =new Date().getFullYear()
  return (
    
    <>
  <footer className='footer d-flex'>
    <Container>
      <Row>
        <Col lg='3'>
          <div className='logo'>
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consece necessit omnis ducimus placeat</p>
            </div>
<div className='Footer_container'>
<span>
  <Link to='#'><i className="ri-youtube-fill custom-icon"></i></Link>
</span>

<span>
  <Link to='#'><i className="ri-github-fill custom-icon"></i></Link>
</span>

<span>
  <Link to='#'><i className="ri-facebook-circle-fill custom-icon"></i></Link>
</span>

<span>
  <Link to='#'><i className="ri-instagram-fill custom-icon"></i></Link>
</span>
</div>

        </Col>

        <Col lg='3'>
       <h5 className="footer_title">Discover</h5>

       <ListGroup className='footer_quick_links'>
  {quick_links.map((item, index) => (
    <ListGroupItem key={index} className='ps-0 border-0'>
      <Link
        to={item.path}
        style={{
          color: "#6e7074"// Change colors as needed
        }}
      >
        {item.display}
      </Link>
    </ListGroupItem>
  ))}
</ListGroup>

        
        
        </Col>
        <Col lg='3'>
        <h5 className="footer_title">Quick_Links</h5>

<ListGroup className='footer_quick_links'>
 {
   quick_links2.map((item,index)=>(
     <ListGroupItem key={index} className='ps-0 border-0'>
       <Link to={item.path}
       style={{
        color: "#6e7074"// Change colors as needed
      }}>{item.display}</Link>
     </ListGroupItem>
   ))
 }

</ListGroup>

        </Col>
        <Col lg='3'>
          <h6>Contact</h6>
         <div className='footer-address'>
       
        <span className='footer_item'><i className="ri-map-pin-fill"></i>Address:NewYork</span>
        
         
          <span className='footer_item'><i className="ri-mail-line"></i>Email:sairagul6677@gmail.com</span>
          <span className='footer_item'><i className="ri-phone-fill"></i>Phone:+193992493</span>
         </div>
          </Col>

          <Col lg='12'>

            <p className="copyright">Copyright {year} desined and developed by Sairagul</p>
          </Col>

      </Row>
    </Container>
  </footer>

    </>
  )
}

export default Footer
