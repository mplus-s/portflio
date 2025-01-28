import React from "react"
import styled from "styled-components"

const Bott = styled.div`
  /* background-color:#616066; */
  position: absolute;
  background-color: red;
  border-radius: 90px;
  min-width: 20%;
  min-height: 90px;
  opacity: 0.75;
  margin-left: 550px;
  top: 980px;
  z-index: 9999;
  /* display: flex;
  justify-content: center; */
`

export default function Bottom() {
  return <Bott>Bottom</Bott>
}
