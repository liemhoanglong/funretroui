import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

import Loading from "../components/Loading";
import BigBoard from "../components/BigBoard";
import AddBigBoard from "../components/AddBigBoard";

import bigBoardAPI from "../api/bigBoard.api";

const Dashboard = () => {
  console.log("🚀 ~ file: Dashboard.js ~ line 11 ~ Dashboard ");
  const [bigBoards, setBigBoards] = useState([]);
  const [reset, setReset] = useState(true);
  const [load, setLoad] = useState(false);

  let id = localStorage.getItem("user");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoad(true);
        const res = await bigBoardAPI.get(id);
        setBigBoards(res);
        setLoad(false);
      } catch (error) {
        console.log("Failed to fetch: ", error);
        setLoad(false);
      }
    };
    fetchAll();
  }, [reset, id]);

  const addBigBoard = async (txt) => {
    if (!txt || /^\s*$/.test(txt)) {
      return;
    }
    const data = { name: txt, authorId: id };
    try {
      setLoad(true);
      await bigBoardAPI.add(data);
      setReset((prevState) => !prevState);
      setLoad(false);
    } catch (error) {
      console.log(
        "🚀 ~ file: Dashboard.js ~ line 44 ~ addBigBoard ~ error",
        error
      );
      setLoad(false);
    }
  };

  return (
    <>
      <Loading isLoad={load} />
      <h1>Dashboard</h1>
      <Container fluid className="bg-white">
        <Form>
          <Row className="align-items-center m-4">
            <Col sm={3} className="p-2">
              <Form.Control type="text" placeholder="Filter your cards" />
            </Col>
            <Col xs="auto" className="p-2">
              <Button variant="outline-secondary">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-search"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                </svg>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container fluid>
        <Row className="m-4">
          <Col md={3} className="p-2">
            <AddBigBoard addBigBoard={addBigBoard} />
          </Col>
          {bigBoards.map((bigBoard) => (
            <BigBoard
              key={bigBoard._id}
              author={id}
              data={bigBoard}
              setReset={setReset}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
