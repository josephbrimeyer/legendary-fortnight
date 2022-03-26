import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Index from './Index.css';

function Nav() {
    return (
        <div className='navbar'>
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
}

export default Nav;