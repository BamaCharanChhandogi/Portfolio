import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  // eslint-disable-next-line no-unused-vars
  SiPostman,
  // eslint-disable-next-line no-unused-vars
  SiSlack,
  SiVercel,
  // eslint-disable-next-line no-unused-vars
  SiMacos,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
