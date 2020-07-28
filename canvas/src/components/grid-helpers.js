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

export const generateRandom = () => {
    const rows = [];
    for(let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => Math.random() > .7 ? 1 : 0))
    };
    return rows;
}

// Random Function
export const generateBalance = () => {
    const rows = [];
    let rowCount = 0
    for(let i = 0; i < numRows; i++){
        // start a counter to skip rows
        if(rowCount > 5 && rowCount < 10){
            rows.push(Array.from(Array(numCols), () => 1))
        } else {
            rows.push(Array.from(Array(numCols), () => 0))
        };
        rowCount += 1;
    };
    console.log(rows)
    return rows;
};


  