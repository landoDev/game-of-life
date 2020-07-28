import styled from 'styled-components';

// App styles //
export const PlayContainer = styled.div`
    display: flex;
    justify-content: space-around;
    .rules-container {
        width: 40%
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

export const GridBoundary = styled.div`
    margin: 0 auto;
    padding: .2%;
    border: 2px solid #FFE81F;
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