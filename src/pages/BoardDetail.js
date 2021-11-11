import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import "../App.css";

import Board from "../components/Board";

import bigBoardAPI from "../api/bigBoard.api";
import boardAPI from "../api/board.api";

const BoardDetail = ({ match }) => {
  const [bigBoards, setBigBoards] = useState([]);
  const [boards, setBoards] = useState([]);
  //edit
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //input1, input2, input3
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  // console.log(match);
  const [reset, setReset] = useState(true);

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

  const delBoard = async (id) => {
    await boardAPI.delete(id);
    setReset(!reset);
  };

  const editBoard = async (id, data) => {
    await setEdit({
      id: id,
      value: data,
    });
  };

  const doneBoard = async (id, data) => {
    await setEdit({
      id: null,
      value: "",
    });
    const temp = { name: data };
    await boardAPI.edit(id, temp);
    setReset(!reset);
  };

  return (
    <>
      <h1>{bigBoards.name}</h1>
      <Container fluid style={{ padding: "30px 40px" }}>
        <Row>
          <Col>
            <Container className="container">
              <Row className="row">
                <h5 style={{ float: "left" }}>Went well</h5>
              </Row>
              <Row className="row" style={{ marginBottom: "10px" }}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="abc"
                    value={input}
                    onChange={handleChange}
                    aria-label="abc"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button
                      onClick={() => addBoard(input, 1)}
                      variant="outline-secondary"
                    >
                      Add
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Row>
              {boards.map((board, i) => {
                return (
                  <Board
                    key={i}
                    data={board}
                    edit={edit}
                    delBoard={delBoard}
                    editBoard={editBoard}
                    doneBoard={doneBoard}
                    type="1"
                  />
                );
              })}
            </Container>
          </Col>
          <Col>
            <Container className="container">
              <Row className="row">
                <h5 style={{ float: "left" }}>To improve</h5>
              </Row>
              <Row className="row" style={{ marginBottom: "10px" }}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="abc"
                    value={input2}
                    onChange={handleChange2}
                    aria-label="abc"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button
                      onClick={() => addBoard(input2, 2)}
                      variant="outline-secondary"
                    >
                      Add
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Row>
              {boards.map((board, i) => {
                return (
                  <Board
                    key={i}
                    data={board}
                    edit={edit}
                    delBoard={delBoard}
                    editBoard={editBoard}
                    doneBoard={doneBoard}
                    type="2"
                  />
                );
              })}
            </Container>
          </Col>
          <Col>
            <Container className="container">
              <Row className="row">
                <h5 style={{ float: "left" }}>Action Items</h5>
              </Row>
              <Row className="row" style={{ marginBottom: "10px" }}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="abc"
                    value={input3}
                    onChange={handleChange3}
                    aria-label="abc"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button
                      onClick={() => addBoard(input3, 3)}
                      variant="outline-secondary"
                    >
                      Add
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                <hr />
              </Row>
              {boards.map((board, i) => {
                return (
                  <Board
                    key={i}
                    data={board}
                    edit={edit}
                    delBoard={delBoard}
                    editBoard={editBoard}
                    doneBoard={doneBoard}
                    type="3"
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

export default BoardDetail;
