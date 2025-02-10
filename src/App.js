import './App.css';
import styled from 'styled-components';
import MainContainer from './components/layout/main-container/MainContainer';
import Bottom from './components/layout/bottom-nav/Bottom';
import Left from './components/layout/lef-nav/Left';

const Background = styled.div`
  background-image: url('https://s3-alpha-sig.figma.com/img/5c50/9602/325c9e58ab55853794e5c621ec7015ba?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sHKq059njCLJ451Z~nTvnW93yyuhhmxQ6mNMkS1iqrjXybR~xJJi0-1VyKXSj9BjPRABbmRq0I3PPBHrA33M7bMgVpqYU5Z5H72byXyqQKjDnVrlARLKPgRYwgqRmPvdcfCdvA2eLyIFGYoVRI8g9eGOmefQmHGq5WIfTewZhBSqFmq37NEvfpC9PZ6~EsA6BwraqpdZimf35uvERdZ~0n8pppoz6bLDmmdEFKLT7jYOpVm1tB9IXFeqkKmn-b8c-TJH8wg34Ckmso9nopUaGgapCTGKErT4jMixidJ4PoPeDYYlNRYARH66~XvPU6McIsHRTMWEly6UTXGea2ts3w__');
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
