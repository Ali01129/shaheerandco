import React from "react";
import { Container, Row, Col } from "reactstrap";
import './button.css'

const contactclick = ()=>{
window.scrollTo({
  top: 1900,
  behavior: "smooth",
});

}

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero ">
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid mb-0"
                      src={require("assets/img/brand/235.png")}
                      style={{ width: "250px" }}
                    />
                    <h4 style={{color:"black"}}>Connecting the world, sourcing excellence</h4>
                    <div className="btn-wrapper mt-4" style={{ display: "flex", justifyContent: "center" }}>
                      <button className="button" onClick={contactclick}>
                        Reach Us
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
