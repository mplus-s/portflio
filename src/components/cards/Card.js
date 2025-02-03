import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  background:rgb(76,76,78) ;
  border: 1px solid white;
  border-radius: 20px;
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "250px"};
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`
export default function Card({ content, width, height }) {
  return (
    <StyledCard width={width} height={height}>
      {content}
    </StyledCard>
  )
}
