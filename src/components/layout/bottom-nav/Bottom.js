import React from "react"
import styled from "styled-components"

const Bott = styled.div`
/* background-color:#616066; */
//   background-color: red;

background: linear-gradient(135deg, #616066, #4f4e53);
  position: absolute;
  border-radius: 90px;
  border: 1px solid white;
  min-width: 20%;
  min-height: 90px;
  opacity: 0.75;
  margin-left: 620px;
  top: 729px;
  z-index: 9999;
   display: flex;
  justify-content: center;
`

export default function Bottom() {
  return <Bott>Bottom</Bott>
}
