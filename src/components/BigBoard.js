import React, { useState, memo } from "react";
import "../App.css";
import { Button, Col, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";

import bigBoardAPI from "../api/bigBoard.api";

const BigBoard = (props) => {
  const { author, data, setReset } = props;
  console.log("🚀 ~ file: BigBoard.js ~ line 16 ~ BigBoard ");

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [input, setInput] = useState("");
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const editBigBoard = (id, data) => {
    setEdit({
      id: id,
      value: data,
    });
  };

  const delBigBoard = async (id) => {
    try {
      setLoad(true);
      await bigBoardAPI.delete(id);
      setReset((prevState) => !prevState);
      setLoad(false);
    } catch (error) {
      console.log("🚀 ~ file: BigBoard.js ~ line 39 ~ delBigBoard ~ error", error)
      setLoad(false);
    }
  };

  const saveBigBoard = async (id, data) => {
    setEdit({
      id: null,
      value: "",
    });
    try {
      setLoad(true);
      await bigBoardAPI.edit(id, { name: data });
      setReset((prevState) => !prevState);
      setLoad(false);
    } catch (error) {
      console.log("🚀 ~ file: BigBoard.js ~ line 55 ~ saveBigBoard ~ error", error)
      setLoad(false);
    }
  };

  const cancelBigBoard = () => {
    setEdit({
      id: null,
      value: "",
    });
  };

  return (
    <Col className="link-custom p-2" md={3}>
      <Loading isLoad={load} />
      <Card>
        {edit && data._id !== edit.id ? (
          <Link className="link-custom" to={`/board/${author}/${data._id}`}>
            <Card.Body>
              <Card.Title className="text-left">{data.name}</Card.Title>
              <Card.Text className="float-right">{data.date}</Card.Text>
            </Card.Body>
          </Link>
        ) : (
          <Card.Body>
            <Card.Title className="text-left">{data.name}</Card.Title>
            <CardGroup>
              <input value={input} className="w-100" onChange={handleChange} />
            </CardGroup>
          </Card.Body>
        )}
        <div className="d-flex">
          {edit && data._id !== edit.id ? (
            <>
              <Button
                variant="primary"
                onClick={() => editBigBoard(data._id, data.name)}
                className="big-board-btn"
              >
                EDIT
              </Button>
              <Button
                variant="danger"
                onClick={() => delBigBoard(data._id)}
                className="big-board-btn"
              >
                DELETE
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                onClick={() => saveBigBoard(data._id, input)}
                className="big-board-btn"
              >
                SAVE
              </Button>
              <Button
                variant="danger"
                onClick={() => cancelBigBoard()}
                className="big-board-btn"
              >
                CANCEL
              </Button>
            </>
          )}
        </div>
      </Card>
    </Col>
  );
};

export default memo(BigBoard);
