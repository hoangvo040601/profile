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
              // description="Welcome to our Nike Shoes Store, where style meets technology. Explore a seamless shopping experience powered by React and Redux, delivering real-time updates to your cart and preferences. Our modern aesthetic, crafted with Tailwind CSS, ensures a visually pleasing journey across all devices. Discover a wide range of Nike footwear, from classics to the latest releases."
              ghLink="https://github.com/developer-abdulali/Nike-Store-App"
              demoLink="https://nike-store-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charsCounter}
              isBlog={false}
              title="Charactors Counter"
              // description="Discover our innovative Character Counter tool – the perfect blend of HTML, CSS, and JavaScript. Experience real-time character count updates as you type, all powered by a sleek HTML interface. With a modern CSS design, this tool is as visually appealing as it is functional. Stay precise and efficient in your content creation – try the Character Counter today"
              ghLink="https://github.com/developer-abdulali/Charactors-counter-app"
              demoLink="https://charactors-counter-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieApp}
              isBlog={false}
              title="Movie Land"
              // description="Developed a dynamic movie app using a combination of React for user interface components, CSS for styling, JavaScript for interactive functionality, API integration to fetch movie data, and Redux Toolkit for state management. This comprehensive application allows users to explore and discover movies efficiently while benefiting from organized state management and a responsive user interface."
              ghLink="https://github.com/developer-abdulali/Movie-Ap"
              demoLink="https://movie-app-ab-ali.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="Todo App"
              // description="I have successfully crafted a practical todo app using a combination of React for building user-friendly components, CSS for polished styling, and JavaScript for seamless functionality. This app empowers users to efficiently manage their tasks, providing an intuitive interface for adding, editing, and marking tasks as complete. Through the integration of React's modular approach, CSS's aesthetic enhancements, and JavaScript's dynamic capabilities, I have created a user-centric todo app that streamlines task organization and enhances productivity."
              ghLink="https://github.com/developer-abdulali/Todo-App"
              demoLink="https://todo-app-red-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panaverseDao}
              isBlog={false}
              title="Ai For Social Good"
              // description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/developer-abdulali/panaverse-dao"
              demoLink="https://panaverse-dao.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
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
