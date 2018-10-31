import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../../reusable-styles/reusable-styles';

class ResourcesHOC extends Component {
  render() {
    return (
      <ResourcesHOCWrapper>
        <h2>Resources:</h2>
        {this.props.children}
      </ResourcesHOCWrapper>
    );
  }
}

export default ResourcesHOC;

const ResourcesHOCWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 8px solid #c1a1c3;
  border-radius: 6px;
  padding: 2rem 1rem;
  background-color: #fff;
  max-width: 60%;
  word-break: break-all;
  text-align: center;
`;
