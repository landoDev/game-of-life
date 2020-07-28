// starting grid dimensions
export const numRows = 25;
export const numCols = 25;

// grid operations for sim
export const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
  ];

// grid functions
export const clearGrid = () => {
    const rows = [];
    for(let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0))
    };
    return rows;
  };
// Random Function
export const generateRandom = () => {
    const rows = [];
    for(let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => Math.random() > .7 ? 1 : 0))
    };
    return rows;
}

// export const changeSpeed = (default, rate) => {
//     // takes a default speed and the new rate
//     switch()
// }


  