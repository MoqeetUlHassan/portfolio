import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left3d = styled.div`
  flex: 1;
`;

const RightDesc = styled.div`
  flex: 1;
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

const Person = () => {
  return (
    <Section>
      <Container>
        <Left3d></Left3d>
        <RightDesc>
          <Title>Think outside the box.</Title>
          <Details>
            <Line src="./img/line.png" />
            <Subtext>hobbies</Subtext>
          </Details>
          <Desc>Developer who likes innovations</Desc>
          <Button>Try work?</Button>
        </RightDesc>
      </Container>
    </Section>
  );
};

export default Person;
