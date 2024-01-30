import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const handleHomeClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer" style={{ backgroundColor: '#001f54', color: '#fff' }}>
          <Container>
            {/* ... (your existing code) */}
            <Row className="row-grid align-items-center mb-5" style={{ color: '#fff' }}>
              <Col lg="6">
                <h3 className="text-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className="text-light mb-0">
                  Let's get in touch on any of these platforms.
                </h4>
                <h6 className="text-light my-4">
                  Website Made by Ali Nawaz<br/>bealinawaz5@gmail.com
                </h6>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="https://instagram.com"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
              </Col>
            </Row>

            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a style={{ color: '#fff' }}>
                    Shaheerandco
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <Link to="/" className="nav-link" onClick={handleHomeClick}>
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/profile-page" className="nav-link">
                    About us
                  </Link>
                </NavItem>
              </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
