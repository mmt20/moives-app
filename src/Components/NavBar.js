import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logo.png';
import { useDispatch } from 'react-redux';
import { getAllMovie, getMovieSearch } from '../redux/actions/movieAction';
import axios from 'axios';

const NavBar = () => {
  const onSerach = (word) => {
    search(word);
  };

  const dispatch = useDispatch();

  // to search in api
  const search = (word) => {
    if (word === '') {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="search"
                onChange={(e) => onSerach(e.target.value)}
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
