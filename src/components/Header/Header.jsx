import React, { useEffect, useRef }  from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import {Container,Row,Button} from 'reactstrap'
import './header.css'


const nav_links=[
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
] 

const Header = () => {

  const headerRef= useRef(null)
 
  const stickyheaderfun=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80  || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      } 
    })
  }

  useEffect(()=>{
    stickyheaderfun();
    return window.removeEventListener('scroll', stickyheaderfun)
  },[])
  return (
  <>
  <header className='header' ref={headerRef}>
  <Container>
    <Row>

      <div className="nav_wrapper d-flex align-items-center justify-content-between ">
      {/* logo starts here */}
      <img className='logo_img' src={logo} alt="logo image is missing" />
      {/* logo ends here  */}
{/* 
      menu start here */}

    <div className='navigation '>
   <ul className="menu d-flex gap-5">
 {nav_links.map((item,index)=>(
 <li className="nav_item" key={index}>
 <NavLink to={item.path} className={navClass=>navClass.isActive?"active_link":""}>{item.display}</NavLink>

 </li>
 
 ))}
 
</ul>

</div>

{/* menu ends here  */}
 

{/* login and register button here */}

<div className="nav_right d-flex align-items-center gap-4">
  <div className="nav_btn d-flex gap-4 ">
    <Button className='btn secondary__btn'> <Link to='/login'>Login</Link></Button>
    <Button className='btn primary__btn'> <Link to='/register'>Register</Link></Button>
  </div>
  <span className="mobile_menu">
 <i className="ri-menu-line"></i>
   
  </span>
</div>
      </div>

    
    </Row>
  </Container>
  </header>
 
</>
  )
}

export default Header
