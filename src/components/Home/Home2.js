import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Devops.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar" style={{}}>
            <Tilt>
              <img src="https://lh3.googleusercontent.com/pw/AIL4fc8wVHqSEPVOb0uYn93kcy643jYPjbUyU_oMwPjq6PjVpEmK9xdKJTT8VuE7n4rsAaaEHpjeGlFgdHtIoa_vvHUBUPcU5spgx3UhHhnKd4PAj2HydU2gZWqX8HR11q8XjSQLhFLwjeEWApkoXHzBm_2YiJWUYZChH6J04mWZbxEOchQFpDkG5i__eNywdrO7ygSx83CxvfdD757uh5l8zdfC83JnfXmNmFZSLYZcKZh1NzKeEPHfIE0GtwYcjMNWNFL3Q7Hxo7RK31Cp24UjKJCp7jSvvIdoP5DLsD72icSUTdl4ITIdvYSLJKSY9QfkMZOn2IXTPa0Qf4wKJdDrqEwDvU7K-ZiBVWpIxD_hiIWlIqAkSq875f-H-SoOdRHsisXhIi9BEeSdajnm-pgZ_l-uP1fzV8rltDdh9mCGQuh53_ve6zYcsy7pMAj5LvUv5pRLiwqmW6hKLmS-62FzJM5QNXUIlIwgLIrVBKlD0pIEncRP-jIUnRUrM94rDYboKowdA5_CKZF9zzsN9PKuiE5Cq8lZAhColBXt0VzBAS7EjB2_NdHC14VNJCMAeozug74ExRG1CgUkSHvCW4CsVqOEMo4yWV-4KzUb1cgPCshEciVNTu6NRjxmIRCPYeyuP_ZtRCsmoXTZheG0PewMSd5jLPjHuLg2LCJBini7y49ctx82qbsHP4CVJ-80mIUZAS-fh8kFnO8WGR_sgE3-hpXR_iW3QocS0xnIuO0VNxjby3l9MM3CS0RybI_GkHrdMd-hIAgxgdS4nFQ2_NRwkXg0b6hmVX7wMmv35VJ3Weya5eRgPfvcLD0MPT7iRUcy8unvg2W_zpX1XcBpgIyyBpDtq3wNMQnPOc_kztLs4PouLzwM2JSXR-OflZ7E_NgkWvqQbNrvf8w3NmziRocIBVPgecX_zXPjCZizgAoMByUNijqMbRaYNC9a7yB8xMh_lA6FsPZY967VdeEvlgCi9BNkN4krYzMu=w861-h861-s-no?authuser=1" className="img-fluid" alt="avatar"
              style={{borderRadius:"50%" }}
              />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BamaCharanChhandogi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/BamacharanCh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bama-charan-chhandogi-b63420240/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/loving_coding/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
