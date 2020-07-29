// component to explain and go in detail about what the game of life is
import React from 'react';
import { AboutContainer } from '../styled';

const About = () => {
    return(
        <AboutContainer>
            <h2>About Conway's game</h2>
            <p>One of the most interesting things I noticed when watching an interview with John Conway was how little he cared for it. I chuckled that this "game" that is so popular, enjoyed by many, and used for teaching was something that the creator doesn't find profound and could take or leave. This no-player game, as dubbed by Conway himself, has it's roots in John von Neumann's <a href="https://en.wikipedia.org/wiki/Von_Neumann_universal_constructor">universal constructor</a>. This "universal constructor" was inspired by biological organisms designs to grow and replace cells autominously using RNA and DNA.</p>
            <p>von Neumann used the concept of cellular automaton to define his evolving machine in more detail. Cellular automaton is a grid of cells with a finite number of states (on/off, true/false, etc.) with any finite size. Each cell lives in a "neighborhood"; a set of cells in relative space to the given cell. Some function with an initial state creates a new generation and updates the cells of the grid accordingly. Living organisms and cellular automata simulate what is called a Turing machine. That is, a hypothetical machine that can simulate any computer algorithm, no matter how complicated it is.</p>
            <p>John Conway and others took these principles and tinkered with them over, and I quote, "18 months of coffee time", to establish the rules listed above. The game was conceived on a 'Go' game board (not on a screen with a computer!). Contrary to von Neumann's theoritcal machine, Conway's only held two states and was not designed. "If you couldn't predict what it did, then probably that's because it was capable of doing anything." Conway's aim was to come up with rules that would be impossible to predict and succeeded in doing so, proving anything could happen.</p>
        </AboutContainer>
    )
};

export default About;