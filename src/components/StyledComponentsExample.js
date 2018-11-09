// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { CTAPrimaryRed, Card } from '../reusable-styles/reusable-styles';
import ResourcesHOC from './reusable/ResourcesHOC';

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
          <ResourcesHOC>
            <a href="https://www.styled-components.com/docs/basics">
              https://www.styled-components.com/docs/basics
            </a>
          </ResourcesHOC>
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
