import "./App.css"
import styled from "styled-components"
import MainContainer from "./components/layout/main-container/MainContainer"

const Background = styled.div`
  background-color: aliceblue;
  min-width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <Background>
      <MainContainer />
      react app
    </Background>
  )
}

export default App
