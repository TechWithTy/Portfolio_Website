import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'reactstrap';
import { projects } from '../data/projects';

const log = (param) => {
  console.log(projects);
};

log();

const Projects = ({ loading }) => {
  return (
    <div className="projects-div">
      <Row className="text-center">
        {projects.map((project, i) => (
          <>
            <Col key={i} xs="6">
              <Fade bottom when={!loading} appear={!loading}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="mx-auto projects-imgs"
                />
              </Fade>
            </Col>

            <Col key={i + 1} className="description-col" xs="6">
              <h1 className="project-title">{project.title}</h1>
              <div>
                <p className="project-description">{project.description}</p>
              </div>
              <div>
                {project.icons.map((icon, i) => (
                  <FontAwesomeIcon
                    alt={icon.title}
                    color={icon.color}
                    icon={icon.icon}
                    size="6x"
                    className="mx-2"
                  />
                ))}
              </div>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
