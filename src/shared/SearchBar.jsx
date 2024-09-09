import React, { useRef } from 'react';
import { Form, FormGroup, Col } from 'reactstrap';
import '../styles/searchbar.css';
import { BASE_URL } from '../utlis/config';
import { json, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const locatiorRef = useRef('');
  const distanceref = useRef(0);
  const maxGroupSizeref = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locatiorRef.current.value;
    const distance = distanceref.current.value;
    const maxGroupSize = maxGroupSizeref.current.value;

    if (location === '' || distance === '' || maxGroupSize === '') {
      return alert('All the fields are required');
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourSearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) {
      console.error(`Error: ${res.status} - ${res.statusText}`);
      const errorData = await res.json();
      console.error('Error data:', errorData);
      alert('Something went wrong');
      return;
    }


    const result = await res.json();

    console.log(result);
    navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, 
    {
      state: result.data
    });


  };

  return (
    <Col lg="12">
      <div className="search_bar ">
        <Form className="d-flex gap-5 all_formgroup ">
          <FormGroup className="d-flex gap-3 form_group_fast form_group ">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>location</h6>
              <input type="text" placeholder="Where are you going" ref={locatiorRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group_fast form_group ">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="K/m" ref={distanceref} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group_fast form_group ">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeref} />
            </div>
          </FormGroup>

          <span className="search_icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
