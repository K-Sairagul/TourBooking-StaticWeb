import React, { useContext } from 'react';
import { Row, Col, Container, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/thankyou.css';
import registerImg from '../assets/images/login.png';
import userimg from '../assets/images/user.png';
import { useState } from 'react';
import '../styles/login.css';

import { AuthContext } from '../components/Context/AuthContext';
import { BASE_URL } from '../utlis/config'; // It seems like there is a typo in 'utlis', it might be 'utils'

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json', // Fix the typo here
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: 'Register_success' });
      navigate('/login');                                                                                    111
    } catch (error) {
      // Handle the error appropriately
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='login_container d-flex justify-content-between '>
                <div className='login_img'>
                  <img src={registerImg} alt='' />
                </div>

                <div className='login-form'>
                  <div className='user'>
                    <img src={userimg} alt='' />
                  </div>
                  <h2>Register</h2>

                  <Form onClick={handleClick}>
                    <FormGroup>
                      <input
                        type='text'
                        placeholder='Enter the username'
                        required
                        id='username'
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <input
                        type='email'
                        placeholder='Enter the Email'
                        required
                        id='email'
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <input
                        type='password'
                        placeholder='Enter the Password'
                        required
                        id='password'
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <button className='btn btn_secondary__btn auth__btn'>Login</button>
                  </Form>

                  <p>
                    Already Have an account <Link to='/login'>Login</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
