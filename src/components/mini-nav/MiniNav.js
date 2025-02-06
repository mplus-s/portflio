import React, {useState} from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 60px;
  overflow: hidden;
`;
const NavItem = styled.div`
  /* background-color: 4c494e; */
  min-width: ${(props) => (props.active ? '75%' : '25%')};
  border-radius: 10px;
  background-color: ${(props) => (props.active ? 'green' : 'red')};
  min-height: 50px;
  z-index: ${(props) => (props.active ? 99 : 10)};
`;

export default function MiniNav() {
  const [home, setHome] = useState(false);
  const [office, setOffice] = useState(false);

  const getActiveItem = (id) => {
    if (id === 'home') {
      setOffice(false);
      setHome(true);
    }
    if (id === 'office') {
      setHome(false);
      setOffice(true);
    }
  };

  return (
    <MainContainer>
      <NavItem onClick={() => getActiveItem('home')} active={home}>
        work from Home
      </NavItem>
      <NavItem onClick={() => getActiveItem('office')} active={office}>
        office
      </NavItem>
    </MainContainer>
  );
}
