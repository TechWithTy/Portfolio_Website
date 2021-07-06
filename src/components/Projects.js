import React from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'reactstrap';
import { projects } from '../data/projects';
const Projects = ({ loading }) => {
  return (
    <div className="projects-div">
      <Row className="text-center">
        {projects.map((project, i) => (
          <>
            <Col xs="6">
              <Fade bottom when={!loading} appear={!loading}>
                <img
                  src={project.img}
                  alt=""
                  className="mx-auto projects-imgs"
                />
              </Fade>
            </Col>

            <Col xs="6">
              <div>{project.description}</div>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
