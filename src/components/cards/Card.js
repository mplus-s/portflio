import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: black;
  border: 1px solid white;
  border-radius: 20px;
  width: ${(props) => props.width || '150px'};
  height: ${(props) => props.height || '250px'};
  margin: ${(props) => props.margin || '0px'};
  color: aliceblue;

  padding: 5px;
`;
export default function Card(props) {
  return (
    <StyledCard margin={props.margin} width={props.width} height={props.height}>
      {props.children}
    </StyledCard>
  );
}
