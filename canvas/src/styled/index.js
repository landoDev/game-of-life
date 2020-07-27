import styled from 'styled-components';
import { numCols } from '../components/grid-helpers';

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GridBoundary = styled.div`
    margin: 0 auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;