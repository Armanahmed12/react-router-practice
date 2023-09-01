import React from 'react';
import img from '../../images/school.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div>
         <Navbar style={{height:'4rem'}} bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand className='d-flex align-items-center' href="#home">
          <img src={img} className='w-25' alt="out-school" style={{height:'4rem'}}/>
          <h2 className='fw-bold fs-1 font-family-custom'>Our School</h2>
        </Navbar.Brand>
        <Nav className="">
          <Link to="/" className='nav-link fw-bold'>Home</Link>
          <Link className='nav-link' to={"/instructors"}>Instructors</Link>
          <Link className='nav-link' to={"/contact"}>Contact</Link>
          <Link className='nav-link' to={'/login'}>Log In</Link>
        </Nav>
      </Container>
         </Navbar>
         <div className='header-page' style={{width:'100%'}}>
           <h2 className='display-4 fw-bold'>Welcome to <br /> <strong className='font-family-custom text-warning'>Our School</strong> </h2>
         </div>
      </div>
    );
};

export default Header;