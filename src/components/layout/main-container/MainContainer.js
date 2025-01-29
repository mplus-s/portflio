import React from "react"
import styled from "styled-components"

const Main = styled.div`
// background: linear-gradient(135deg,rgb(227, 200, 193),rgb(67, 61, 57)); 
// background-color: #616066;

background: linear-gradient(135deg, #616066, #4f4e53);
  border-radius: 90px;
  border: 1px solid white;
  max-width: 75%;
  min-width: 75%;
  min-height: 60vh;
  opacity: 0.75;
  display: flex;
  justify-content: center;
  margin-left: 10px;
`

export default function MainContainer() {
  return <Main>MainContainer</Main>
}
