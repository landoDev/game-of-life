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

  // later on try to break this into styled components to clean up the main component

  return(
    <div className="App">
      <h1>Lando's Game of Life</h1>
      {/* style the grid so it's a square */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}>
        {/* map through grid to make rows and chain to make cols */}
        {grid.map((rows, i) => 
          rows.map((col, k) => (
            <div
            key={`${i}-${k}`}
            // clickable
            onClick={() => {
              setGrid()
            }} 
            style={{
              width: 20, 
              height: 20, 
              backgroundColor: grid[i][k] ? 'black' : undefined, 
              border: "solid 1px black"
              }} 
            />
          ))
        )}
      </div>
    </div>
  ) 
}

export default App;
