import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import lib from "../../Assets/Projects/lib.jpg"
import blog from "../../Assets/Projects/blog.png"
import emotion from "../../Assets/Projects/emotion.png"
import code from "../../Assets/Projects/code.jpg"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lib}
              isBlog={false}
              title="Alohomora- Library Management System"
              description="User friendly MERN application for managing database in library
              Allows user to perform CRUD operations on students and books."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="MERN Blog"
              description="A user-friendly blogging tool made up of MERN stack that enables
              users to create, format, and modify blogs."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HARRY POTTER"
              description="This is a website having all the information about Harry Potter. A reat page for harry potter fans"
              ghLink="https://github.com/aditi578/HarryPotterWeb.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="TEXT-UTILIZER"
              description="Text utilizer is a software which you can use to do many types of editing in a given text"
              ghLink="https://github.com/aditi578/text_utilizer.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Landing page with django backend"
              description="This is a prototype of a landing page. The frontend contains React framework and the backend is of Django"
              ghLink="https://github.com/aditi578/ReactLandingPage.git"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition using open CV"
              description="Uses Open-CV to detect the parts of face."
              ghLink="https://github.com/aditi578/OpenCv.git"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
