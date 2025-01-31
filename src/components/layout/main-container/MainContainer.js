import React from "react"
import styled from "styled-components"

const Main = styled.div`
// background: linear-gradient(135deg,rgb(227, 200, 193),rgb(67, 61, 57)); 
// background-color: #616066;

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
const Card = styled.div`
background: linear-gradient(135deg, #616066, #4f4e53);
border: 1px solid white;
border-radius: 20px;
width: 250px;
height: 250px;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;
`

const Card1 = styled.div`
  background: linear-gradient(135deg, #616066, #4f4e53);
border: 1px solid white;
  border-radius: 20px;
  width: 150px;
  height: 250px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  `
  const Rectangle = styled.div`
  background: linear-gradient(135deg, #616066, #4f4e53);
border: 1px solid white;
  border-radius: 20px;
  width: 250px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
 
`

export default function MainContainer() {
  return <Main>
 <Card>Mark Attendence</Card>
 <Card1>Leaves Summary</Card1>
 <Card1>Waiting For Approval</Card1>
 <Rectangle>Income</Rectangle>
 <Rectangle>Expenses</Rectangle>
 <Rectangle>Messages</Rectangle>
 <Rectangle>HR Letters</Rectangle>
 {/* <Card1>Leaves Summary</Card1> */}
 <Rectangle>Attendence Summary</Rectangle>
 <Rectangle>Forms</Rectangle>

  </Main>
}
