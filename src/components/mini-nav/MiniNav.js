import React, {useState} from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #2d2d2d;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 45px;
  width: 240px;
  border-radius: 25px;
  padding: 5px;
`;
const NavItem = styled.div`

background-color: ${(props) => (props.active ? '#6e6e6e' : 'transparent')};
text-align: center;
padding: 5px 5px;
flex: 1;
border-radius: 20px;
min-height: 30px;
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
        Work from Home
      </NavItem>
      <NavItem onClick={() => getActiveItem('office')} active={office}>
        Office
      </NavItem>
    </MainContainer>
  );
}
