import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Hero from "./IndexSections/Hero.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Contact from "./IndexSections/Contact.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar color={"black"}/>
        <main ref="main">
          <Hero />
          <section className="section section-components">
            {/* <Container>
              <Tabs />
            </Container> */}
              <Contact/>
          </section>
        </main>
        <SimpleFooter/>
      </>
    );
  }
}

export default Index;
