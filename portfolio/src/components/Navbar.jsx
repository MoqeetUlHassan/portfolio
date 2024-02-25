import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
`;

const Links = styled.div`
  width: 1400px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  width: 1400px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 70px;
  width: 50px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  cursor: pointer;
`;
const ListItem = styled.li``;

const Button = styled.button`
  width: auto;
  background-color: darkslateblue;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src=" " />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png " />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
