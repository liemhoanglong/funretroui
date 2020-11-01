import '../App.css';
import {Button, Row, Col, Container, Card } from 'react-bootstrap'

const BigBoard = (props) => {
  return(
    <>
      <Col key={props.data.id} md={3} style={{ padding: '10px' }}>
        <Card style={{ width: '100%' }}>
          <a className="big-board-hover" href="/task" >
            <Card.Body >
              <Card.Title style={{ textAlign: 'left', fontSize:'18px' }}>{props.data.name}</Card.Title>
              <Container>
                <Card.Text>
                  <Row>
                    <Col key="1" style={{ textAlign: 'left', padding:'0px', color:"#999" }}>
                      {props.data.date}
                    </Col>
                    <Col key="2" style={{ textAlign: 'right', padding:'0ps', color:"#999" }}>
                      {" cards"}
                    </Col>
                  </Row>
                </Card.Text>
              </Container>
            </Card.Body>
            </a>
            <Row >
              <Col key="1" style={{ padding:"0px 0px 0px 15px" }}>
                <Button variant="outline-light" href="#" style={{ color:"purple", width:"100%", paddingRight:"0px" }}>URl</Button>
              </Col> 
              <Col key="2" style={{ padding:"0px 15px 0px 0px" }}>
                <Button variant="outline-light" href="#" style={{ color:"purple", width:"100%", paddingRight:"0px" }}>CLONE</Button>
              </Col> 
            </Row>
          </Card>
      </Col>
    </>
  );
} 

export default BigBoard;