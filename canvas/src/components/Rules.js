import React from 'react';
import { RulesContainer } from '../styled';
import HowTo from './HowTo';

const Rules = () => {
    return (
        <RulesContainer className="rules-container">
            <h2>Conway's Rules</h2>
            <p>I put my name in the title of this iteration, but alas, I'm far from the Mathematician that invented this little number. I do, however, have access to his rules and how this game works.</p>
            <div className="rules">
                <p>Rule 1: if a cell hass less than two surrounding cells, it will DIE <span role="img" aria-label="skull">💀</span></p>
                <p>Rule 2: If a cell has more than three surrounding cells, IT WILL DIE <span role="img" aria-label="skull">💀</span></p>
                <p>Rule 3: If a dead cell has exactly three surrounding cells, it will be reborn! <span role="img" aria-label="angel-baby">👼</span></p>
                <p>Rule 4: If a cell has two or three surrounding cells, it staves of the cold embrace and survives <span role="img" aria-label="shades-emoji">😎</span> </p>
            </div>
            <div className="how-to">
                <HowTo />
            </div>
        </RulesContainer>
    )
};

export default Rules;