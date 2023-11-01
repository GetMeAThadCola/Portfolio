import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hunter Carbone </span>
            from <span className="purple"> Flagstaff, Arizona </span>
            <br /> I am a recent graduate of the ASU Cybersecurity Bootcamp with a focus on Comptia Sec+ certification. I am actively preparing for the Comptia Sec+ examination and subsequently intend to pursue studies for the Amazon Web Services Practitioner certification.
            <br />
            Additionally, I am currently employed as a the IT Assocaite at STAR School in Flagstaff
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Empowering cybersecurity through continuous learning, one certification at a time."{" "}
          </p>
          <footer className="blockquote-footer">Hunter Carbone</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
