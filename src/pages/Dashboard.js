import React, {useEffect, useState} from 'react';
import '../App.css';

import BigBoard from '../components/BigBoard';
import bigBoardAPI from '../api/bigBoard.api';


import {Button, Form, FormControl, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
   
const Dashboard = ({ match }) =>{
  const [bigBoards, setBigBoards] = useState([])
  let id = "5f981b31face1e2ddb883a4c";
  
  useEffect(() => {
    const fetchAll = async () => {
      try {
        let id = "5f981b31face1e2ddb883a4c";
        // let id = match.params.id;

        const res = await bigBoardAPI.get(id);
        setBigBoards(res);
      } catch (error) {
        console.log('Failed to fetch: ', error);
      }
    } 
    fetchAll();
  }, [])


  return(
    <>
      <h1>My boards</h1>
      <Container style={{ padding: '5px 40px', maxWidth:'95%', background:"white" }}>
        <Form inline>
          <FormControl type="text" placeholder="Filter your cards" className="mr-sm-2" />
          <Button variant="light" >
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
          </Button>
        </Form>
      </Container>
      <Container fluid style={{ padding: '30px 40px' }}>
        <Row>
          <Col md={3} style={{ padding: '10px' }}>
            <a className="big-board-hover" href="#" >
              <div className="add-big-board" style={{ width: '100%', height: "5rem", padding:"2rem", }}>
                <h6 style={{ textDecoration:"none" }}>Add Board</h6>
              </div>
            </a>
          </Col>
          {bigBoards.map((bigBoard, i) => {
            return (
              <BigBoard key={i} author={id} data={bigBoard}/>
            )
          })}
        </Row> 
      </Container>
    </>
  )
}
export default Dashboard
          