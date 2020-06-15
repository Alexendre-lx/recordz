import React, { Component } from 'react';
import { Row, Col,Container } from 'react-bootstrap'

class contentContainer extends Component {
    render() {
        return (
            <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                1 of 3
                </Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="2">
                3 of 3
                </Col>
                </Row>
        </Container>
        );
    }
}

export default contentContainer;