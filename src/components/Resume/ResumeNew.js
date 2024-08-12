import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const googleDocsURL = "https://docs.google.com/document/d/1RVnBLGGxr51HQdXSy_vs9GX58VmBkxTt/view";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={googleDocsURL}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;View in Google Docs
          </Button>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <iframe
            title="Resume"
            src={googleDocsURL}
            width="800"
            height="1100"
            style={{ border: "none" }}
            allowFullScreen
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={googleDocsURL}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;View in Google Docs
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;