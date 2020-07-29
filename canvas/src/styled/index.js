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
    padding: 0 1%;
    margin-bottom: 5%;
    max-width: 100%
    .speed-label {
        margin-left: 5%;
    }
    .speed {
        background-color: black;
        border: 1px solid black;
    }
    .label-topbar {
        font-size: 12px;
    }
`;

export const GridBoundary = styled.div`
    margin: 0 auto;
    padding: 2.5%;
    border: 2px solid #FFE81F;
    align-items: center;
`;

export const PresetDiv = styled.div`
    margin-top: 5%;
    border-top: 1px solid #FFE81F;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5% 0;
`;

export const BtnWrapper = styled.div`
    margin: 0 auto;
`;

export const PresetButton = styled.button`
    background-color: black;
    border: 1px solid #FFE81F;
    padding: 5px;
    margin: 0 5%;
`;

// Grid Component Styles End //

// Rules Component Styles //

export const RulesContainer = styled.div`
    margin-right: 5%;
`;

// Rules Component Styles End //