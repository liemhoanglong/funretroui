import React, { useState, memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Row, InputGroup, FormControl, Button } from "react-bootstrap";
import { useParams } from "react-router";

import Board from "../components/Board";

import boardAPI from "../api/board.api";

function TypeBoard(props) {
  console.log("🚀 ~ file: TypeBoard.js");
  const { boards, setReset, type } = props;
  const params = useParams();

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addBoard = async (txt, type) => {
    if (!txt || /^\s*$/.test(txt)) {
      return;
    }
    const data = { name: txt, type: type, like: 0, boardId: params.id };
    await boardAPI.add(data);
    setInput("");
    setReset((prevState) => !prevState);
  };

  return (
    <>
      <Row className="mb-2">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="abc"
            value={input}
            onChange={handleChange}
            aria-label="abc"
            aria-describedby="basic-addon2"
          />
          <Button
            onClick={() => addBoard(input, +type)}
            variant="outline-secondary"
          >
            Add
          </Button>
        </InputGroup>
      </Row>
      <Droppable droppableId={type}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "white",
                borderRadius: 4,
                padding: 4,
                height: 600,
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              {boards
                .filter((board) => board.type + "" === type)
                .map((board, i) => {
                  return (
                    <Board
                      key={board._id}
                      index={i}
                      data={board}
                      setReset={setReset}
                    />
                  );
                })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </>
  );
}

export default memo(TypeBoard);
