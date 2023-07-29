import React from "react";
import Card from "react-bootstrap/Card";
import { ImBook, ImCamera, ImMusic, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ADITI RATHORE </span>
            <br /> I am a final year student in IT department from shri guru gobind singh ji institute of engineering and technology, Nanded
            
            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImBook /> Reading novels
            </li>
            <li className="about-activity">
              <ImMusic /> Dancing
            </li>
            <li className="about-activity">
              <ImCamera /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "A dream does not become reality through magic; it takes sweat, determination, and hard work."{" "}
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
