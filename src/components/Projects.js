import React from 'react';
import { Col, Row } from 'reactstrap';

const Projects = () => {
  return (
    <div className="projects-div">
      <Row className="text-center">
        <Col xs="6">
          <img
            src="https://images.unsplash.com/photo-1607779823243-190c752a67eb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="mx-auto"
          />
        </Col>
        <Col xs="6">
          {' '}
          <img
            src="https://images.unsplash.com/photo-1607779823243-190c752a67eb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="mx-auto"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
