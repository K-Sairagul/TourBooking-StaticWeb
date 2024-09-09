import React from 'react'
import { Row,Col,Container,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thankyou.css'
import loginImg from '../assets/images/login.png'
import userimg from '../assets/images/user.png'
import { useState } from 'react'
import '../styles/login.css'

const Login = () => {
  const[credentials,setcredentials]=useState({
    email:undefined,
    password:undefined
  })

  const handlechange=e=>{
    setcredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  }

  const handleclick=e=>{
    e.preventDefault()
  }
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='8'>

          <div className="login_container d-flex justify-content-between ">
            <div className="login_img">
              <img src={loginImg} alt="" />
            </div>

            <div className="login-form">
              <div className="user">
                <img src={userimg} alt="" />
              </div>
              <h2>Login</h2>

              <Form onClick={handleclick}>
                <FormGroup>
                <input type='email' placeholder='Enter the Email' required id='email' onChange={handlechange} />
                </FormGroup>

                <FormGroup>
                <input type='password' placeholder='Enter the Password' required id='password' onChange={handlechange} />
                </FormGroup>
                <button className='btn btn_secondary__btn auth__btn'>Login</button>
              </Form>

              <p>Don't Have an account <Link to='/register'>Create</Link></p>
            </div>
          </div>
        
        </Col>
      </Row>
    </Container>
  </section>

  </>
    
}

export default Login
