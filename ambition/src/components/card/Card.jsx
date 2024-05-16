import '../card/Card.css'
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Course() {
      return(
        <div className='Course'>
          <p className='nav'>Our Featured Courses</p>
          <ul>
            <li>All Courses</li>
            <li>Business</li>
            <li>Student</li>
            <li>Employee</li>
          </ul>
        </div>
      )
}

function User(props){
  return(
    <div className="Card">
      <img className='img' src="digital_marketing.png" alt="Digital Marketing" />
      <p>{props.course}</p>
      <Button className="btn" variant="primary" size="sm">Enroll</Button>
    </div>
  )
};



export const Card=()=> {
  return (
    <>
    <section className='courses'>
         <Course />

      <Container className='all-cards'>
      <Row>
        <Col sm={4}>   <User course="Digital Marketing"/></Col>
        <Col sm={4}>  <User course="Re-Sale Products"/></Col>
        <Col sm={4}>    <User course="Digital Marketing"/></Col>
      </Row>
      <Row>
        <Col sm={4}>      <User course="Digital Marketing"/></Col>
        <Col sm={4}>      <User course="Digital Marketing"/></Col>
        <Col sm={4}>      <User course="Programming"/></Col>
      </Row>
    </Container>
{/* <User course="Digital Marketing"/>
<User course="Digital Marketing"/>
<User course="Digital Marketing"/><User course="Digital Marketing"/>
<User course="Digital Marketing"/>
<User course="Digital Marketing"/> */}

    </section>
    </>
  );  
};
