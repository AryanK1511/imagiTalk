import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { Container, Row, Col, Button } from 'react-bootstrap';

// Homepage
export default function Home() {
  return (
    <>
      <Navbar />
      <Container fluid className="m-5 home-body">
        <Row className="home-body-text-block">
          <Col md={7} className="pl-5">
            <h1 className="custom-header">Chat with your<br/> favourite character<br/>from the past.</h1>
            <p>
              Just type out the name of the character you want to <br /> 
              talk to and explore the endless possibilities of
              <br /> interactive storytelling.
            </p>
            <Button className="start-chatting-btn px-5 mt-2"><a href="/characters">CHAT</a></Button>
          </Col>
        </Row>
      </Container>
      <figure id="figure1">
        <img src="assets/images/figures/Vector1.png" alt="Figure 1" />
      </figure>
      <figure id="figure2">
        <img src="assets/images/figures/Ellipse7.png" alt="Figure 2" />
      </figure>
      <figure id="figure3">
        <img src="assets/images/figures/Rectangle8.png" alt="Figure 3" />
      </figure>
      <figure id="figure4">
        <img src="assets/images/figures/Rectangle9.png" alt="Figure 4" />
      </figure>
      <figure id="figure5">
        <img src="assets/images/figures/Polygon1.png" alt="Figure 5" />
      </figure>
    </>
  );
}
