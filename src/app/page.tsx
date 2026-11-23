"use client";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "next/image";

import Navbar from "@/component/navbar";
import Herosection from "@/component/herosection";
import Worksection from "@/component/worksection";
import ServiceSection from "@/component/servicesection";
import ContactSection from "@/component/contactsection";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Herosection />

      {/* About Us */}
      <Container className="my-5">
        <Row className="my-4">
          <Col md={6} className="align-self-center mb-3">
            <h2>About Us</h2>
            <h6>What We Do?</h6>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fugiat, ipsam culpa. Commodi aspernatur temporibus placeat
              libero fugit at sequi consequuntur.
            </p>

            <Button variant="info">Learn More</Button>
          </Col>

          <Col md={6}>
            <Image
              src="/images/aboutus.jpg"
              alt="About Us"
              width={500}
              height={500}
            />
          </Col>
        </Row>
      </Container>

      {/* Work Section */}
      <section className="py-4" style={{ backgroundColor: "#fff9ac" }}>
        <Worksection />
      </section>

      {/* Service Section */}
      <ServiceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}