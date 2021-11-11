import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

function AddBigBoard(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBigBoard(input);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="abc"
          value={input}
          onChange={handleChange}
          aria-label="board name"
          aria-describedby="board-name"
        />
        <Button type="submit" variant="warning">
          Add Board
        </Button>
      </InputGroup>
    </Form>
  );
}

export default AddBigBoard;
