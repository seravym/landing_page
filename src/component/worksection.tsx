'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

function AutoLayoutExample() {
  return (
    <Container>
      <Row className='mt-5 mb-5'>
        <Row className='mb-3'>
          <Col className="text-center">
            <h2>What We Work</h2>
            <p>Lorem Ipsum dolor sit amet consectetur adipiscing elit.</p>
          </Col>
        </Row>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/images/bu.png" style={{ objectFit: 'cover', height: '300px' }} />
            <Card.Body>
              <Card.Title>karate</Card.Title>
              <Card.Text>
                we help people by bye.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/images/bunny2.jpg" style={{ objectFit: 'cover', height: '300px' }} />
            <Card.Body>
              <Card.Title>hardwork</Card.Title>
              <Card.Text>
                there's nothing we can't or won't do.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/images/bun.jpg" style={{ objectFit: 'cover', height: '300px' }} />
            <Card.Body>
              <Card.Title>blessing</Card.Title>
              <Card.Text>
                we accept client that was cursed by demon, and pray for people.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;