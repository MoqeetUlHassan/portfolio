import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Person from './components/Person';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <Person />
      <Experience />
      <Contact />
    </Container>
  );
};

export default App;
