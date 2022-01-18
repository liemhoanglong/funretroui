import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DragDropContext } from "react-beautiful-dnd";

import TypeBoard from "../components/TypeBoard";
import bigBoardAPI from "../api/bigBoard.api";
import boardAPI from "../api/board.api";
import { TYPE_BOARD } from "../constants/typeBoards.constant";

const BigBoardDetail = ({ match }) => {
  console.log("🚀 ~ file: BigBoardDetail.js");
  const [bigBoards, setBigBoards] = useState([]);
  const [boards, setBoards] = useState([]);
  const [reset, setReset] = useState(false);

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

  const onDragEnd = useCallback((result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  }, []);

  return (
    <>
      <h1>{bigBoards.name}</h1>
      <Container fluid style={{ padding: "30px 40px" }}>
        <Row>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, bigBoards, setBigBoards)}
          >
            {TYPE_BOARD.map((type) => (
              <Col key={type.id}>
                <Container>
                  <center>
                    <h5>{type.name}</h5>
                  </center>
                  <TypeBoard
                    boards={boards}
                    setReset={setReset}
                    type={type.id}
                  />
                </Container>
              </Col>
            ))}
          </DragDropContext>
        </Row>
      </Container>
    </>
  );
};

export default BigBoardDetail;
