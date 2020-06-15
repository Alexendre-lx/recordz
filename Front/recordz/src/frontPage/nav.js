import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class nav extends Component {

  constructor(){
    super()
    this.state = {
        offset: 0
    };
}
    render() {
        return (
          <div>
              <div style={{ height : '50px', backgroundColor: 'gray' }} >
              <p> Covid-19 </p>
            </div>
            <Navbar sticky="top" className="mainNav" style={{ marginTop: -this.state.offset + 45}}>
            <Navbar.Brand href="#home">Recordz</Navbar.Brand>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"  style={{ backgroundColor: 'transparent', borderWidth: '0px !important', borderBottom: '1px solid white !important' }}/>
              <Button variant="outline-info">Search</Button>
            </Form>
            <Nav className="mr-auto" style={{ right: 0, position: 'absolute'}}>
              <Link to="/" className="mainLinks">Accueil</Link>
                <Link to="/landing" class="mainLinks">Créer une experience</Link>
                <Link to="/page" class="mainLinks">Mon profil</Link>
            </Nav>
          </Navbar>
        </div>
        );
    }

    componentDidMount() {
      console.log("mounted")
      window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
      console.log("unmounted")
      window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        console.log(window.pageYOffset)
      this.setState({
        offset: window.pageYOffset
      });
    };
}

nav.propTypes = {

};

export default nav;