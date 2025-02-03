import React from "react"
import styled from "styled-components"
import Card from "./../../cards/Card"
const Main = styled.div`
  background: linear-gradient(135deg, #616066, #4f4e53);
  border: 1px solid white;
  border-radius: 90px;
  max-width: 75%;
  min-width: 75%;
  min-height: 60vh;
  opacity: 0.75;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  flex-wrap: wrap;
  padding: 20px;
`
const attendenceCard = <h1> Attendence </h1>

export default function MainContainer() {
  return (
    <Main>
      <Card width="500px" height="500px" content={attendenceCard} />
    </Main>
  )
}
