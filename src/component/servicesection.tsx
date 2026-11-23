"use client";

import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection() {
  return (
    <Container className='my-5'>
      <Row>
        <Col md={4} className="mb-3 text-center mb-3 py-3">
          <Image src="/images/bunny3.jpg" alt="Service 1" style={{objectFit: 'cover', height: '300px'}}/>
          <h3>black</h3>
          <p>does the karate.</p>
        </Col>

        <Col md={4} className="mb-3 text-center mb-3 py-3">
          <Image src="/images/buni.jpg" alt="Service 2" style={{objectFit: 'cover', height: '300px'}}/>
          <h3>cream</h3>
          <p>does the hardwork.</p>
        </Col>

        <Col md={4} className="mb-3 text-center mb-3 py-3">
          <Image src="/images/bunny1.jpg" alt="Service 3" style={{objectFit: 'cover', height: '300px'}}/>
          <h3>brown</h3>
          <p>does the blessing.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceSection;