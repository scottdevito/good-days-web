// @flow
import React from 'react';
import styled from 'styled-components';

import WelcomeSVG from '../assets/welcome-screen/WelcomeScreenGraphic.svg';

const WelcomeScreen = () => {
  return (
    <WelcomeScreenWrapper>
      <SkyWrapper>
        <Header>What does your best day look like?</Header>
        <WelcomeGraphicWrapper src={WelcomeSVG} alt="Welcome Graphic" />
      </SkyWrapper>
      <GrassWrapper />
    </WelcomeScreenWrapper>
  );
};

export default WelcomeScreen;

const WelcomeScreenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  text-align: center;
`;

const Header = styled.h3`
  font-size: 36px;
  color: #373737;
  margin: 8rem 3rem 0 3rem;
  width: 100%;
`;

const SkyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100%;
  background-color: #b3e5fc;
`;

const GrassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
  background-color: #dcedc8;
`;

const WelcomeGraphicWrapper = styled.img`
  max-width: 100%;
  transform: translateY(54px);

  @media (min-width: 768px) {
    height: 120%;
    transform: translateY(36%);
  }
`;
