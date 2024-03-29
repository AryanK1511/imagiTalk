import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

// Homepage
export default function Home() {

  useEffect(() => {
    const body = document.body;
    body.style.overflowY = "hidden";
    return () => {
      body.style.overflowY = "";
    };
  }, []);

  return (
    <div className="homeWrapper">
      <Navbar />
      <Container fluid className="m-5 home-body">
        <Row className="home-body-text-block">
          <Col md={7} className="pl-5">
            <h1 className="custom-header">
              Chat with your
              <br /> favourite character
              <br />
              from the past.
            </h1>
            <p>
            Discover the magic of connecting with your beloved characters in<br/> just a few clicks. Engage with your favourite fictional universes.
            </p>
            <Button className="start-chatting-btn px-5 mt-2">
              <Link legacyBehavior href="/characters">
                <a>CHAT</a>
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
      <figure id="figure1">
        <img src="assets/images/figures/figure1.svg" alt="Figure 1" />
      </figure>
      <figure id="figure2"> </figure>
      <figure id="figure3"></figure>
      <figure id="figure4"> </figure>
      <figure id="figure5">
        <img src="assets/images/figures/figure2.svg" alt="Figure 2" />
      </figure>
    </div>
  );
}
