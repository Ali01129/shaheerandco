import React, { Component } from 'react';
import classnames from 'classnames';
import emailjs from '@emailjs/browser';
import Download from '../IndexSections/Download.js';

// reactstrap components
import {
  Card,
  CardImg,
  Container,
  Row,
  Col,
} from 'reactstrap';

// index page sections
class Landing extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      nameFocused: false,
      emailFocused: false,
      mailSucess: false,
      mailFailed: false,
    };
    this.sendEmail = this.sendEmail.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.myRef.current.scrollTop = 0;
  }

  sendEmail(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    emailjs.send('service_wwolopp', 'template_wrupfua', data, 'Dv6HlNtUXwHAiE7vH')
      .then((result) => {
        console.log(result.text);
        console.log("email send success");
        event.target.reset();
        //mailsucess
        this.setState({ mailSucess: true }, () => {
          setTimeout(() => {
            this.setState({ mailSucess: false });
          }, 5000);
        });
      })
      .catch((error) => {
        console.log(error.text);
        console.log("email send failed");
        //mailfailed
        this.setState({ mailFailed: true }, () => {
          setTimeout(() => {
            this.setState({ mailFailed: false });
          }, 5000);
        });
      });
  }
  
  render() {
    
    return (
      <>
        <main ref={this.myRef}>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/brand/import.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        We Deal in
                      </h4>
                      <p className="lead text-italic text-white">
                        Latex<br/>
                        Shoes Material<br/>
                        Allied Chemicals<br/>
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <p>
                    <b>Latex:</b><br/>
                    We import high-grade latex, known for its versatility in various industries. Our latex products boast exceptional quality, offering durability and flexibility, making them ideal for manufacturing processes such as textiles, healthcare, and more.
                    </p>
                    <p>
                    <b>Shoes Material:</b><br/>
                    Our imported shoes materials redefine footwear excellence. From premium leathers to cutting-edge synthetics, we provide materials that combine comfort, style, and durability. Elevate your shoe designs with our top-tier imports.
                    </p>
                    <p>
                    <b>Allied Chemicals:</b><br/>
                    Explore our range of allied chemicals designed for diverse industrial applications. Our imports adhere to strict quality standards, ensuring reliability and performance. Whether in manufacturing or processing, our chemicals contribute to the success and innovation of various industries.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Download />
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Contact us</h2>
                  <p className="lead text-white">
                  To avail of our services and get in touch, kindly utilize the provided contact form. Feel free to reach out to us by completing the form below. Whether you have inquiries, require assistance, or wish to explore our offerings, this streamlined communication channel ensures a prompt and efficient response. Your satisfaction is our priority, and we look forward to connecting with you. Simply fill out the form with your details, and we will ensure that your queries or requests are addressed promptly. Thank you for considering our services, and we anticipate the opportunity to assist you effectively.
                  </p>
                </Col>
              </Row>
              
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                <form className="bg-gradient-secondary shadow card" ref={this.myRef} onSubmit={this.sendEmail}>
                  <div className="p-5 card-body">
                    <h4 className="mb-1">Mail us</h4>
                    <p className="mt-0">Your satisfaction is our priority.</p>

                    <div className={classnames("mt-5 form-group", {focused: this.state.nameFocused,})}>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-user-run"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                        />
                      </div>
                    </div>

                    <div className={classnames("form-group",{focused: this.state.emailFocused,})}>
                      <div className="input-group mt-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Your Email address"
                          type="email"
                          name="user_email"
                        />
                      </div>
                    </div>

                    <div className="mb-4 form-group">
                      <textarea
                        className="form-control form-control-alternative"
                        cols="80"
                        name="message"
                        placeholder="Type a message..."
                        rows="4"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        className="btn-round btn btn-default btn-lg btn-block"
                        type="submit"
                        value="Send"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                {/* Alert for successful email send */}
                {this.state.mailSucess && (
                    <div className="alert alert-primary mt-3" role="alert">
                      Email sent successfully!
                    </div>
                  )}
                {this.state.mailFailed && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Email Failed!
                  </div>
                )}
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;