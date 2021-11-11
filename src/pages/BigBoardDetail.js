import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import Board from "../components/Board";

import bigBoardAPI from "../api/bigBoard.api";
import boardAPI from "../api/board.api";

const BigBoardDetail = ({ match }) => {
  console.log("🚀 ~ file: BigBoardDetail.js")
  const [bigBoards, setBigBoards] = useState([]);
  const [boards, setBoards] = useState([]);
  const [reset, setReset] = useState(true);
  //input1, input2, input3
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  // console.log(match);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };
  const handleChange3 = (e) => {
    setInput3(e.target.value);
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        let id = `${match.params.author}/${match.params.id}`;
        const res = await bigBoardAPI.get(id);
        setBigBoards(res);
      } catch (error) {
        console.log("Failed to fetch: ", error);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        let id = `${match.params.id}`;
        const res = await boardAPI.get(id);
        setBoards(res);
      } catch (error) {
        console.log("Failed to fetch: ", error);
      }
    };
    fetchAll();
  }, [reset]);

  const addBoard = async (txt, type) => {
    if (!txt || /^\s*$/.test(txt)) {
      return;
    }
    const data = { name: txt, type: type, like: 0, boardId: match.params.id };
    await boardAPI.add(data);
    setReset(!reset);
  };

  return (
    <>
      <h1>{bigBoards.name}</h1>
      <Container fluid style={{ padding: "30px 40px" }}>
        <Row>
          <Col>
            <Container>
              <center>
                <h5>Went well</h5>
              </center>
              <Row className='mb-2'>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="abc"
                    value={input}
                    onChange={handleChange}
                    aria-label="abc"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    onClick={() => addBoard(input, 1)}
                    variant="outline-secondary"
                  >
                    Add
                  </Button>
                </InputGroup>
              </Row>
              {boards.filter(board=>board.type === 1).map((board, i) => {
                return (
                  <Board
                    key={i}
                    data={board}
                    setReset={setReset}
                  />
                );
              })}
            </Container>
          </Col>
          <Col>
            <Container>
              <center>
                <h5>To improve</h5>
              </center>
              <Row className='mb-2'>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="abc"
                    value={input2}
                    onChange={handleChange2}
                    aria-label="abc"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    onClick={() => addBoard(input2, 2)}
                    variant="outline-secondary"
                  >
                    Add
                  </Button>
                </InputGroup>
              </Row>
              {boards.filter(board=>board.type === 2).map((board, i) => {
                return (
                  <Board
                    key={i}
                    data={board}
                    setReset={setReset}
                  />
                );
              })}
            </Container>
          </Col>
          <Col>
            <Container>
              <center>
                <h5>Action Items</h5>
              </center>
              <Row className='mb-2'>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="abc"
                    value={input3}
                    onChange={handleChange3}
                    aria-label="abc"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    onClick={() => addBoard(input3, 3)}
                    variant="outline-secondary"
                  >
                    Add
                  </Button>
                </InputGroup>
              </Row>
              {boards.filter(board=>board.type === 3).map((board, i) => {
                return (
                  <Board
                    key={i}
                    data={board}                    
                    setReset={setReset}
                  />
                );
              })}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BigBoardDetail;
