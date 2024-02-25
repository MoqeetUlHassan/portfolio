import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftDesc = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20;
`;

const Title = styled.h1``;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtext = styled.h2`
  color: aqua;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color: aqua;
  color: black;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right3d = styled.div`
  flex: 3;
  position: relative;
`;
const Image = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftDesc>
          <Title>Think. Make. Solve.</Title>
          <Details>
            <Line src="./img/line.png" />
            <Subtext>Skills</Subtext>
          </Details>
          <Desc>Web developer with human-centered digital experieces</Desc>
          <Button>Try Us</Button>
        </LeftDesc>
        <Right3d>
          <Image src="./img/moon.png" />
        </Right3d>
      </Container>
    </Section>
  );
};

export default Hero;
