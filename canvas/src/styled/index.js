import styled from 'styled-components';

// App styles //
export const PlayContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .rules-container {
        width: 40%
        // align-self: left
    }
    .grid-container {
        width: 50%;
    }
`;
// App Styles End //

// Grid Component Styles //
export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5%;
    .speed-label {
        margin-left: 5%;
    }
    .speed {
        background-color: black;
        border: 1px solid black;
    }
`;

export const GridBoundary = styled.div`
    margin: 0 auto;
    padding: 1%;
    border: 2px solid #FFE81F;
`;

export const PresetDiv = styled.div`
    border-top: 1px solid yellow;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 5% 0;
`;

// Grid Component Styles End //

// Rules Component Styles //

export const RulesContainer = styled.div`
    margin-right: 5%;
`;

// Rules Component Styles End //