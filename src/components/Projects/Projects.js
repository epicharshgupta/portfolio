import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pg from "../../Assets/Projects/pg.webp";
import JP from "../../Assets/Projects/JP.webp"
import FMS from "../../Assets/Projects/FMS.webp";

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
              imgPath={FMS}
              isBlog={false}
              title="AI powered FMS"
              description="An AI-powered Financial Management System that helps users track transactions, monitor budgets, and gain real-time insights. The system uses AI to analyze spending patterns, generate personalized reports, and provide smart alerts for better financial decisions."
              ghLink="https://github.com/epicharshgupta/welth"
              demoLink="https://welth-fm.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JP}
              isBlog={false}
              title="Bits-0f-C0de"
              description="A Job Portal built using React (frontend) and MongoDB (backend database) where:

Employers can post jobs, manage applications, and update company profiles.

Candidates can browse/search jobs, apply with resumes, and track application status.

Admins can monitor jobs, users, and companies."
              ghLink="https://github.com/epicharshgupta/job-portal-application"
              demoLink="https://career-nest-steel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Password Generator"
              description="A web-based Password Generator that creates strong and customizable passwords using HTML, CSS, and JavaScript. It allows users to choose password length, include/exclude characters, and copy the generated password instantly."
              ghLink="https://github.com/epicharshgupta/password-genearor"
              demoLink="https://password-generator-murex-sigma.vercel.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
