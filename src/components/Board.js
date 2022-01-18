import React, { useState, memo } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Draggable } from "react-beautiful-dnd";

import boardAPI from "../api/board.api";

const Board = (props) => {
  console.log("🚀 ~ file: Board.js");
  const { data, setReset, index } = props;

  const [input, setInput] = useState("");
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const delBoard = async (id) => {
    await boardAPI.delete(id);
    setReset((preState) => !preState);
  };

  const editBoard = (id, data) => {
    setEdit({
      id: id,
      value: data,
    });
  };

  const saveBoard = async (id, data) => {
    setEdit({
      id: null,
      value: "",
    });
    await boardAPI.edit(id, { name: data });
    setReset((preState) => !preState);
  };

  const cancelBoard = () => {
    setEdit({
      id: null,
      value: "",
    });
  };

  return (
    <Draggable draggableId={data._id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="mb-3"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              padding: 2,
              // backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              ...provided.draggableProps.style,
            }}
          >
            {edit && data._id !== edit.id ? (
              <Card
                className={`${
                  data.type === 1
                    ? "bg-danger"
                    : data.type === 2
                    ? "bg-primary"
                    : "bg-success"
                } bg-gradient text-white border-0 rounded`}
                style={{
                  transform: snapshot.isDragging ? "rotate(2deg)" : "none",
                }}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="text-start">{data.name}</p>
                    <div
                      className="hover-cursor"
                      onClick={() => editBoard(data._id, data.name)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-pencil"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div style={{ float: "right" }}>
                    <svg
                      style={{ marginBottom: "5px" }}
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-hand-thumbs-up"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"
                      />
                    </svg>
                    <span>{data.like}</span>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <Card
                className={`${
                  data.type === 1
                    ? "bg-danger"
                    : data.type === 2
                    ? "bg-primary"
                    : "bg-success"
                } bg-gradient text-white border-0 rounded`}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="text-start">{data.name}</p>
                    <div
                      className="hover-cursor"
                      onClick={() => delBoard(data._id)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-trash-fill"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      saveBoard(data._id, input);
                    }}
                  >
                    <Form.Control
                      value={input}
                      className="w-100"
                      onChange={handleChange}
                    />
                    <div className="d-flex mt-3 justify-content-between">
                      <Button type="submit" variant="success" size="sm">
                        Save
                      </Button>
                      <Button variant="warning" size="sm" onClick={cancelBoard}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            )}
          </div>
        );
      }}
    </Draggable>
  );
};

export default memo(Board);
