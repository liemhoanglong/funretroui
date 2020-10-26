import React, {useEffect, useState} from 'react';
import './App.css';
import { boardAPI } from './api/board.api';
import {Grid} from '@material-ui/core';
import Board from './components/Board';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" >
              Funretro
            </Typography>
            <Button style={{flexGrow:1}} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container spacing={1}>
        {boards.map((board, i) => {
          return (
            <Grid item xs={4} key={i}>
              <Board data={board} />
              {/* {board.name} */}
            </Grid> 
          )
        })}
      </Grid>
    </div>
  );
}

export default App;
