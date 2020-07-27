import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const numRows = 25;
const numCols = 25;

function App() {
  // initialize grid
  const [grid, setGrid] = useState(() => {
    // useState initialized as function so it runs once and stays rendered
    const rows = [];
    for(let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0))
    };

    return rows;
  })

  console.log(grid)

  return(
    <div className="App">
      <h1>Lando's Game of Life</h1>
    </div>
  ) 
}

export default App;
