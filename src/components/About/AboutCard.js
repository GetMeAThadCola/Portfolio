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
            <br /> I am a recent graduate of the <span className="purple"> ASU Cybersecurity Bootcamp </span> with a focus on Comptia Sec+ certification. I just recenlty passed my CompTIA Secuirty + exam as well as a Amazon Cloud Certification as well.
            <br />
            I am currently employed as an <span className="purple"> PC LAN TECH </span> in Northern Arizona. In this role, I manage various responsibilities including end-user troubleshooting, printer issue resolution, and various other improvment projects.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Completing Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Ways to Use Tech
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
