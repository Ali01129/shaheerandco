import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  About our Services{" "}
                </h2>
                <h6 className="light">
                In summary, our role as importers of latex, shoe materials, and allied chemicals positions us as a vital link in the supply chain, contributing to the success and innovation of industries that rely on these essential materials. Through a commitment to quality, reliability, and customer satisfaction, we aim to be a preferred partner for businesses seeking top-notch materials for their diverse applications.
                </h6>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
