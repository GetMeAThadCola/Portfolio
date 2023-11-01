import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Hash Guard"
              description="This project began as a bash script, showcased during my cybersecurity boot camp, which earned a high grade for the final project. I've expanded upon it by creating a user-friendly GUI in Python, enabling easy file integrity comparison through hash algorithms and logging results to enhance usability and functionality."
              ghLink="https://github.com/GetMeAThadCola/Scripting-Projects/tree/main/VSCodePojects/HashGuard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Lets Go Phishing"
              description="For an educational project, I simulated a phishing attack on myself using Zphisher, aiming to understand phishing techniques. This hands-on exercise enhanced my comprehension of social engineering tactics, phishing prevention, and cybersecurity awareness, bolstering my skills in recognizing and mitigating phishing threats."
              ghLink="https://github.com/GetMeAThadCola/Scripting-Projects/tree/main/CyberSec%20Projects/Phishing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Azure Cloud Security"
              description="In the 24-week Cybersecurity BootCamp at ASU, one of the key projects involved setting up a virtual network in Microsoft Azure and implementing various security features to protect both the website hosted on the network and the network itself. "
              ghLink="https://github.com/GetMeAThadCola/Scripting-Projects/tree/main/CyberSec%20Projects/Security%20Azure%20(Cloud)%20Network"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Recipe AI"
              description="This Python application is a Recipe Generator that allows users to discover new recipes based on keywords or ingredients they provide. It leverages the Edamam Recipe Search API to fetch random recipes tailored to the user's input. The application features a user-friendly graphical user interface (GUI) built with tkinter, making it easy for users to interact with and find recipe inspiration."
              ghLink="https://github.com/GetMeAThadCola/Scripting-Projects/tree/main/VSCodePojects/Recipe%20Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Exploit Generator"
              description="This code is a Python script for a simple port scanner with a graphical user interface (GUI) using the Tkinter library. It allows a user to enter an IP address, a range of ports (start and end), and then initiates a port scanning process. The script attempts to connect to each port in the specified range and identifies open ports. "
              ghLink="https://github.com/GetMeAThadCola/Scripting-Projects/tree/main/VSCodePojects/ExploitGenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Inventory Management System with Tkinter and SQLite"
              description="This project is an inventory management system designed to maintain records of various items using a Graphical User Interface (GUI) created with Tkinter in Python. The system stores its data in a SQLite database, allowing users to add, delete, search, and manage inventory items efficiently."
              ghLink="https://github.com/getmeathadcola/Scripting-Projects/tree/main/VSCodePojects/Inventory%20Manager"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
