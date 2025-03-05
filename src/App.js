import './App.css';
import styled from 'styled-components';
import MainContainer from './components/layout/main-container/MainContainer';
import Bottom from './components/layout/bottom-nav/Bottom';
import Left from './components/layout/lef-nav/Left';

import backgroundImage from './background.png'; // Ensure the path is correct

const Background = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  /* opacity: 0.8; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100vh;
  padding: 10% 0 0 15%;
  &:after {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
    opacity: 80%;
    content: '';
  }
  #overlay {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 999;
    opacity: 10%;
  }
`;

const LayOutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

function App() {
  return (
    <Background backgroundImage={backgroundImage}>
      <LayOutContainer>
        <Left />
        <MainContainer />
        <Bottom />
      </LayOutContainer>
    </Background>
  );
}

export default App;
