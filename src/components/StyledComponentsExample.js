import React, { Component } from 'react';
import styled from 'styled-components';
import { CTAPrimaryRed, Card } from '../reusable-styles/reusable-styles';

type Props = {
  colorProp?: string,
};

class StyledComponentsExample extends Component<Props> {
  render() {
    return (
      <StyledComponentsWrapper>
        <Box colorProp="#9575CD">
          <StyledComponentsExampleHeader>
            Styled Components
          </StyledComponentsExampleHeader>
          <ul>
            <li>Install styled components</li>
          </ul>
          <CTAPrimaryRed>This is a reusable button</CTAPrimaryRed>
        </Box>
      </StyledComponentsWrapper>
    );
  }
}

export default StyledComponentsExample;

const StyledComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.colorProp};
  color: #fff;
`;

const StyledComponentsExampleHeader = styled.h1``;
