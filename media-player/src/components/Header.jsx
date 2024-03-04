import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            
          <i className="fa-solid fa-upload fa-beat-fade fa-xl" style={{color:'#3e8384'}}></i>
          {' '} &nbsp;&nbsp;
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
