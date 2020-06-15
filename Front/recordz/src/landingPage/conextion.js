import React, { Component } from 'react';
import { Card, CardGroup, Button, Form, Row, Col } from 'react-bootstrap'

class conextion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      insc : true,
    };
    this.updateButton = this.updateButton.bind(this);
    this.updateButton = this.updateButton2.bind(this);
    this.getForm = this.getForm.bind(this);
  }

  getForm(){
    console.log(GetLogForm)
      if (this.state.insc){
        return GetLogForm
      }else{
        return GetInscrForm
      }
  }

  updateButton2(){
    this.setState({
      insc : true,
    })
  }

  updateButton(){
    this.setState({
      insc : false,
    })
  }

    render() {
        return (
            <CardGroup style={{ height:"50%", width: "50%" }}>
<Card
    bg='info'
    style={{ width: '18rem', height:"100%" }}
    className="mb-2"
  >
    <Card.Body>
      <Card.Title>Bienvenue sur recordz </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem', height:"100%" }}>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
          {this.getForm()}
      </Card.Text>
      <Button variant="primary" onClick={this.updateButton}>Connexion</Button>{' '}
      <Button variant="secondary" onClick={this.updateButton}>Inscription</Button>{' '}
    </Card.Body>
  </Card>
</CardGroup>
        );
    }
}

export default conextion;

var GetLogForm = (
      <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        </Form>
)

var GetInscrForm = (
    <Form>

      <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>

      <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </Form>
  )

