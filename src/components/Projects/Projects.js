import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import managerUsers from "../../Assets/Projects/managerUsers.png";
import tiktokUi from "../../Assets/Projects/tiktokUi.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Dự án của tôi</strong>
        </h1>
        <p style={{ color: "white" }}>
          Đây là một số dự án cá nhân mà tôi đã từng làm
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={managerUsers}
              isBlog={false}
              title="Manage Users"
              ghLink="https://github.com/hoangvo040601/users_managerment.git"
              demoLink="https://users-managerment.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tiktokUi}
              isBlog={false}
              title="TiktokUi"
              ghLink="https://github.com/hoangvo040601/tiktok_ui.git"
              demoLink="https://tiktok-ui-gold.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
