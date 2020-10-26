import React, {useEffect, useState} from 'react';
import './App.css';
import { boardAPI } from './api/board.api';

function App() {
  const [boards, setBoards] = useState([])
  useEffect(() => {
    async function fetchAll() {
      const res = await boardAPI.getAllBoard();

      setBoards(res);
    } 
    fetchAll();
  }, [])
  return (
    <div className="App">
      {
        boards.map(board => {
          return <li key= {board.id}>{board.name}</li> 
        })
      }
    </div>
  );
}

export default App;
