import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import Content from './mainContent'
import {Container, Row, Col} from 'react-bootstrap'

class Header extends Component {

    constructor(){
        super()
        this.state = {
            offset: 0
        };
    }
    render() {
        return (
            <header
            className="header-background" style={{ backgroundPositionY: this.state.offset }}>
                <div style={{ bottom: this.state.offset / 2 , zIndex:1, width: "100%", height:"80vh"}}>
                    
                </div>
                <div style={{bottom: this.state.offset / 2 , zIndex:10, position: 'relative', marginTop: "-50%"}} class="mainTitle">
                </div>
                <section class="content" className='info-container' style={{bottom: this.state.offset / 2 , zIndex:10, position: 'relative'}}>
                <Container fluid id="mainContainer">
                    <Row className="justify-content-xl-center">
                        <Col>
                        </Col>
                        <Col sm={9}>
                        <Content/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                </section>
            </header>
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

export default Header;