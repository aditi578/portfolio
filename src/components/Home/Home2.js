import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avtar.gif"; 
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImTrophy } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Growing up I had curiosity in learning how things worked....which attracted me to coding cuz I love building new things... 🤷‍♂️
              <br />
              <br />I have knowledge of
              <i>
                <b className="purple"> C++, C,  JAVA, Python, HTML, CSS </b>
              </i>
              <br />
           
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avtar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Also checkout my</h1>
          
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aditi578"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/aditi_rathore8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <ImTrophy />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditi-rathore-b87307221/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
           
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
