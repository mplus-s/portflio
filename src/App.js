import './App.css';
import styled from 'styled-components';
import MainContainer from './components/layout/main-container/MainContainer';
import Bottom from './components/layout/bottom-nav/Bottom';
import Left from './components/layout/lef-nav/Left';

const Background = styled.div`
  background-image: url('https://s3-alpha-sig.figma.com/img/5c50/9602/325c9e58ab55853794e5c621ec7015ba?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXlOTG8~ErGBgtkviu4ZkBdYxzobk7E1jzLoLiCuHOJkZT7cZ1UpjEY7rpEZH3uHDsOZwlDEcsuuoAwL6QsvrJdZBuqU8lpksYG-1pUB12gH-hre-jClHGjVg4h4OXAR2crivTwpJR1BM~wUGHY63COo1Ws~SkLHGU8S0BUu1M0pY3QbakZHBsjdbll2Hz7OHloJuNG39Lo6jt3PPqAlC4XUK2JxiCHsV73LY~4UBR0YhZiGoK6hpwgYKi4wwmCvB~YouDFENOubvl9T1BPSEsmBe-g4LKNVodqF7Txp7OfDIpLpVyy~gV3qb9vywKGxPBq5mA-YX2e8aiIRRvFIiA__');
  opacity: 0.8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 100%;
  min-height: 100vh;
  padding: 10% 0 0 15%;
  /* display: flex;
  flex-direction: row; */
`;
const LayOutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  width: 100%;
`;

function App() {
  return (
    <>
      <Background>
        <LayOutContainer>
          <Left />
          <MainContainer />
          <Bottom />
        </LayOutContainer>
      </Background>
    </>
  );
}

export default App;
