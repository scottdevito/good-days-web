// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite, TweenLite, Bounce, Expo } from 'gsap/all';

import WelcomeSVG from '../assets/welcome-screen/WelcomeScreenGraphic.svg';
import SunSVG from '../assets/welcome-screen/Sun.svg';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.welcomeTl = new TimelineLite({ paused: true });
    this.skyTweenWrapper = null;
    this.headerTweenWrapper = null;
    this.sunTweenWrapper = null;
    this.grassTweenWrapper = null;
  }

  componentDidMount = () => {
    this.welcomeTl
      .add(
        TweenLite.to(this.skyTweenWrapper, 5, {
          backgroundColor: '#b3e5fc',
          ease: Expo.easeInOut,
        }),
        0
      )
      .add(
        TweenLite.to(this.grassTweenWrapper, 5, {
          backgroundColor: '#dcedc8',
          ease: Expo.easeInOut,
        }),
        0
      )
      .add(
        TweenLite.to(this.headerTweenWrapper, 5, {
          autoAlpha: 1,
          y: 20,
          delay: 3,
          ease: Expo.easeOut,
        }),
        0
      )
      .add(
        TweenLite.to(this.sunTweenWrapper, 3, {
          y: -200,
          ease: Bounce.easeOut,
          delay: 0.8,
        }),
        0
      );
  };

  render() {
    this.welcomeTl.play();
    return (
      <WelcomeScreenWrapper>
        <SkyWrapper ref={div => (this.skyTweenWrapper = div)}>
          <Header ref={div => (this.headerTweenWrapper = div)}>
            What does your best day look like?
          </Header>
          <SunGraphicWrapper
            src={SunSVG}
            alt="Sun Graphic"
            ref={img => (this.sunTweenWrapper = img)}
          />
          <WelcomeGraphicWrapper src={WelcomeSVG} alt="Welcome Graphic" />
        </SkyWrapper>
        <GrassWrapper ref={div => (this.grassTweenWrapper = div)} />
      </WelcomeScreenWrapper>
    );
  }
}

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
  font-size: 32px;
  color: #373737;
  margin: 8rem 3rem 0 3rem;
  width: 100%;
  opacity: 0;
  visibility: hidden;

  @media (min-width: 768px) {
    margin: 4rem 3rem 0 3rem;
  }
`;

const SkyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  width: 100%;
  background-color: #494949;
`;

const GrassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
  background-color: #aabb97;
  z-index: 11;
`;

const WelcomeGraphicWrapper = styled.img`
  max-width: 100%;
  transform: translateY(54px);
  z-index: 100;

  @media (min-width: 768px) {
    height: 120%;
    transform: translateY(36%);
  }
`;

const SunGraphicWrapper = styled.img`
  position: absolute;
  z-index: 10;
  bottom: 20vh;
  left: 55vw;

  @media (min-width: 768px) {
    bottom: 36vh;
    width: 6%;
  }

  @media (min-width: 1440px) {
    bottom: 42vh;
    width: 7%;
  }

  @media (min-width: 2560px) {
    bottom: 54vh;
    width: 7%;
  }
`;
