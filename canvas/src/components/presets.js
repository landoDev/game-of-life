import { clearGrid, numCols, numRows } from './grid-helpers'

const tieFighter = {
    layer1: [1,0,0,0,0,0,0,0,1],
    layer2: [1,0,0,0,0,0,0,0,1],
    layer3: [1,0,0,1,1,1,0,0,1],
    layer4: [1,1,1,1,1,1,1,1,1],
    layer5: [1,0,0,1,1,1,0,0,1],
    layer6: [1,0,0,0,0,0,0,0,1],
    layer7: [1,0,0,0,0,0,0,0,1]
}

// Preset functions
export const generateTieFighter = () => {
    const rows = clearGrid();
    // how to make more DRY? write a function?
    rows.splice.apply(rows[10], [8, tieFighter.layer1.length].concat(tieFighter.layer1))
    rows.splice.apply(rows[11], [8, tieFighter.layer1.length].concat(tieFighter.layer2))
    rows.splice.apply(rows[12], [8, tieFighter.layer1.length].concat(tieFighter.layer3))
    rows.splice.apply(rows[13], [8, tieFighter.layer1.length].concat(tieFighter.layer4))
    rows.splice.apply(rows[14], [8, tieFighter.layer1.length].concat(tieFighter.layer5))
    rows.splice.apply(rows[15], [8, tieFighter.layer1.length].concat(tieFighter.layer6))
    rows.splice.apply(rows[16], [8, tieFighter.layer1.length].concat(tieFighter.layer7))
    return rows;
};

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
    return rows;
};

// create a function that will make a clear grid, take parameters for (start row, how many rows to increment, what column to start at, and an object with layer keys and array values)