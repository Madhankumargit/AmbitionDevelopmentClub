import "../about/About.css";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="headings">
            <h2>About</h2>
            <h3 className="institute">Ambition Development</h3>
            </div>         

            <p className="cont">
              Ambition development in Chennai offers courses that are tailored
              to specific hiring criteria. These programs are meticulously
              designed to ensure that students meet job requirements and have
              future potential in mind. Our team of didactic experts provides
              top-notch instruction based on real-world scenarios, assisting
              each student in realizing their objective.
            </p>
          </Col>
          <Col sm={6}>
            {" "}
            <img
              className="image_about"
              src="digital_marketing.png"
              alt="Dummy Image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
