import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer'; // set immutable state
import { 
    numCols,
    numRows,
    operations,
    clearGrid,
    generateRandom,
} from './grid-helpers';
import { generateBalance, generateTieFighter } from './presets'
import { GridContainer, ButtonContainer, GridBoundary, PresetDiv, TopBar, PresetButton, BtnWrapper } from '../styled/index';


function Grid() {
  const [grid, setGrid] = useState(() => {
    // useState initialized as function so it runs once and stays rendered
    return clearGrid();
  });
  let [generation, setGeneration] = useState(0);
  let [speed, setSpeed] = useState(500);
  // Simulation running state
  const [isRunning, setIsRunning] = useState(false);
  const runningRef = useRef(); // ref current value will always be update
  runningRef.current = isRunning; // allows to use a current value in a callback (runSim)
  const speedRef = useRef()
  speedRef.current = speed;
  const genRef = useRef();
  genRef.current = generation

  // run simulation
  const runSim = useCallback(()=>{
    if(!runningRef.current){
      setGeneration(0)
      return; // kills sim if isRunning is false
    }
    setGeneration(genRef.current += 1)
    // simulate using immer to create mutable copy
    setGrid((g)=> {
      return produce(g, gridCopy => {
        for(let i = 0; i < numRows; i++){ // O(n^2) ? 😬
          for(let k = 0; k < numCols; k++) {
            let neighbors = 0;
            // created logic to reduce duplication code
            // computes the number of neighbors
            operations.forEach(([x,y])=> {
              const newI = i + x;
              const newK = k + y;
              // check the bounds of the grid
              if(newI >= 0 && newI < numRows && newK >= 0 && newK < numCols){
                neighbors += g[newI][newK];
              };
            });
            
            if(neighbors < 2 || neighbors > 3) {
              // die conditions 💀
              gridCopy[i][k] = 0
            } else if(g[i][k] === 0 && neighbors === 3){
              gridCopy[i][k] = 1
              // IT'S ALIVEEEEEE 👶
            };
          };
        };
      })
    })

    // call run sim again
    setTimeout(runSim, speedRef.current)
  },[]); // empty array ensures the function is only created once

  // next step sim, refactor a way to pull this into runSim
  const nextStep = useCallback(() => {
    if (!runningRef.current) {
      return;
    };
    setGeneration(genRef.current += 1)
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
    setIsRunning(false);
  }, []);

  return(
    <GridContainer 
    className="grid-container">
      <GridBoundary>
      <TopBar className="top-bar">
        <label className="generations label-topbar">{generation}  Generations</label>
        <br></br>
        <label className="speed-label label-topbar"> Speed:</label>
        <button className="speed" onClick={() => setSpeed(500)}>Normal</button>
        <button className="speed" value="2" onClick={() => setSpeed(500 / 2)}>2x</button>
        <button className="speed" value="10" onClick={() => setSpeed(500 / 10)}>10x</button>
      </TopBar>
        {/* style the grid so it's a square */}
        <div 
        className="grid-display"
        style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
            // padding: '2px',
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
                backgroundColor: grid[i][k] ? '#FFE81F' : undefined,
                // if people don't like the lack of box line it can be added back 
                border: "solid 1px black",
                }} 
                />
            ))
            )}
        </div>
        <PresetDiv>
      <h4>Presets</h4>
      <ButtonContainer className="presets">
            <PresetButton onClick={()=> {
                setGrid(generateRandom());
            }}>Rando Calrissian</PresetButton>
            <PresetButton onClick={()=> {
                setGrid(generateBalance());
            }}>Balance</PresetButton>
            <PresetButton onClick={()=> {
                setGrid(generateTieFighter());
            }}>TIE Fighter</PresetButton>
        </ButtonContainer>
        </PresetDiv>
      </GridBoundary>
      <BtnWrapper>
      <ButtonContainer className="grid-actions">
        <PresetButton onClick={() =>{
            setIsRunning(!isRunning);
            if(!isRunning){
            // handle race condition 
            runningRef.current = true;
            // DON'T FORGET TO CALL THE SIMULATION
            runSim();
            };
        }}>{isRunning ? 'Stop' : 'Start'}</PresetButton>
        <PresetButton onClick={() =>{
            setIsRunning(!isRunning);
            if(!isRunning){
            runningRef.current = true;
            nextStep();
            };
        }}> Next</PresetButton>
        <PresetButton onClick={()=> {
            setGeneration(0)
            setGrid(clearGrid());
            setIsRunning(false);
        }}>Clear</PresetButton>
      </ButtonContainer>
      </BtnWrapper>
    </GridContainer>
  ) 
}

export default Grid;