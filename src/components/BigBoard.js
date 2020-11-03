import React, {useEffect, useState} from 'react';
import '../App.css';
import {Button, Row, Col, Container, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const BigBoard = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : 'default');
  // const [input, setInput] = useState('');
  // props.edit ? setInput(props.edit.value) : '';
  // console.log(props.edit.value)
  // console.log(input);

  const handleChange = e => {
    setInput(e.target.value);
    console.log(input);
  };

  return(
    <>
      { props.edit && props.data._id !== props.edit.id ? 
        <Col key={props.data._id} md={3} style={{ padding: '10px' }}>
          <Card style={{ width: '100%' }}>
            <Link className="big-board-hover" exact to ={`/board/${props.author}/${props.data._id}`} >
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
            </Link>
            <Row >
              <Col key="1" style={{ padding:"0px 0px 0px 15px" }}>
                <Button 
                  variant="outline-light" 
                  onClick={() => props.editBigBoard(props.data._id, props.data.name)} 
                  style={{ color:"purple", width:"100%", paddingRight:"0px" }}
                >
                  EDIT
                </Button>
              </Col> 
              <Col key="2" style={{ padding:"0px 15px 0px 0px" }}>
                <Button 
                  variant="outline-light" 
                  onClick={() => props.delBigBoard(props.data._id)}
                  style={{ color:"purple", width:"100%", paddingRight:"0px" }}
                >
                  DELETE
                </Button>
              </Col> 
            </Row>
          </Card>
        </Col>  
      :
        <Col key={props.data._id} md={3} style={{ padding: '10px' }}>
          <Card style={{ width: '100%' }}>
            <Card.Body >
              <Card.Title style={{ textAlign: 'left', fontSize:'18px' }}>{props.data.name}</Card.Title>
              <CardGroup>
                <input 
                  value={input} 
                  style={{ width: "100%"}} 
                  onChange={handleChange}
                />
              </CardGroup>
            </Card.Body>
            <Row >
              <Col key="1" style={{ padding:"0px 0px 0px 15px" }}>
                <Button 
                  variant="outline-light" 
                  onClick={() => props.doneBigBoard(props.data._id, input)} 
                  style={{ color:"purple", width:"100%", paddingRight:"0px" }}
                >
                  DONE
                </Button>
              </Col> 
              <Col key="2" style={{ padding:"0px 15px 0px 0px" }}>
                <Button 
                  variant="outline-light" 
                  onClick={() => props.delBigBoard(props.data._id)}
                  style={{ color:"purple", width:"100%", paddingRight:"0px" }}
                >
                  DELETE
                </Button>
              </Col> 
            </Row>
          </Card>
        </Col>  
      }
      
    </>
  );
} 

export default BigBoard;