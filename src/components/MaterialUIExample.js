import React from 'react';
import styled from 'styled-components';
import { Card } from '../reusable-styles/reusable-styles';
import ResourcesHOC from './reusable/ResourcesHOC';

const MaterialUIExample = () => {
  return (
    <MaterialUIExampleWrapper>
      <MaterialUIExampleHeader>Material UI</MaterialUIExampleHeader>
      <ul>
        <li>Install Material UI</li>
        <li>Create .MUI.js component</li>
        <li>Import .mui.js component into render method</li>
      </ul>
      <ResourcesHOC>
        <a href="https://material-ui.com/demos/selects">
          https://material-ui.com/demos/selects
        </a>
      </ResourcesHOC>
    </MaterialUIExampleWrapper>
  );
};

export default MaterialUIExample;

const MaterialUIExampleWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MaterialUIExampleHeader = styled.h1``;
