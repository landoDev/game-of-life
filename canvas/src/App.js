import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer'; // set immutable state
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
  // Simulation running state
  const [isRunning, setIsRunning] = useState(false);

  // ref to protect runSim from isRunning updates
  const runningRef = useRef();
  runningRef.current = isRunning;

  // run simulation
  const runSim = useCallback(()=>{
    if(!isRunning){
      return; // kills sim if isRunning is false
    }
    // simulate
    setTimeout(runSim, 1000) // write fn to make setTimeout dynamic later

  },[]); // empty array ensures the function is only created once


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
              const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = !grid[i][k]; // switch to toggle
              })
              // updates the grid with the new grid value without changing the initial state
              setGrid(newGrid);
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
      <button onClick={() =>{
        setIsRunning(!isRunning)
      }}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  ) 
}

export default App;
