import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nikeStore from "../../Assets/Projects/nikeStore.png";
import charsCounter from "../../Assets/Projects/CharsCounter.png";
import movieApp from "../../Assets/Projects/movieApp.png";
import todoApp from "../../Assets/Projects/todoApp.png";
import panaverseDao from "../../Assets/Projects/panaverseDao.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";

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
              imgPath={nikeStore}
              isBlog={false}
              title="Nike Shoes Store"
              ghLink="https://github.com/developer-abdulali/Nike-Store-App"
              demoLink="https://nike-store-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charsCounter}
              isBlog={false}
              title="Charactors Counter"
              ghLink="https://github.com/developer-abdulali/Charactors-counter-app"
              demoLink="https://charactors-counter-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieApp}
              isBlog={false}
              title="Movie Land"
              ghLink="https://github.com/developer-abdulali/Movie-Ap"
              demoLink="https://movie-app-ab-ali.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="Todo App"
              ghLink="https://github.com/developer-abdulali/Todo-App"
              demoLink="https://todo-app-red-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panaverseDao}
              isBlog={false}
              title="Panaverse Dao"
              ghLink="https://github.com/developer-abdulali/panaverse-dao"
              demoLink="https://panaverse-dao.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              ghLink="https://github.com/developer-abdulali/Weather-App"
              demoLink="https://weather-app-livid-tau.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
