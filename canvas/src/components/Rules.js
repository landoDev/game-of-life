import React from 'react';

const Rules = () => {
    return (
        <div>
            <h2>Conway's Rules</h2>
            <p>I put my name in the title, but alas, I'm far from the mathemtician that invented this little number. I do, however, have access to his rules and how this game works.</p>
            <div className="rules">
                <p>Rule 1: if a cell hass less than two surrounding cells, it will DIE <span>💀</span></p>
                <p>Rule 2: If a cell has more than three surrounding celss, IT WILL DIE <span>💀</span></p>
                <p>Rule 3: If a dead cell has exactly three surrounding cells, it will be reborn! <span>👼</span></p>
                <p>Rule 4: If a cell has two or three surrounding cells, it staves of the cold embrace and survives <span>😎</span> </p>
            </div>
        </div>
    )
};

export default Rules;