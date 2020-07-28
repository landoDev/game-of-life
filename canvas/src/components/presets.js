import { clearGrid } from './grid-helpers'

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
    
    rows.splice.apply(rows[10], [8, tieFighter.layer1.length].concat(tieFighter.layer1))
    // rows[11] = rows[10]
    // rows[12] = [1,0,0,1,1,1,0,0,1]
    // rows[13] = [1,1,1,1,1,1,1,1,1]
    // rows[14] = rows[12]
    // rows[15] = rows[10]
    // rows[16] = rows[10]
    console.log(rows)
    return rows;
};