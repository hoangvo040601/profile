import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImHtmlFive } from "react-icons/im";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGit,
  // DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss
 
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
import { SiTypescript } from "react-icons/si"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ImHtmlFive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiNodejs /> */}
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

    </Row>
  );
}

export default Techstack;
