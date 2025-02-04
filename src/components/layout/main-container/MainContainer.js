import React from 'react';
import styled from 'styled-components';
import Card from './../../cards/Card';
import {Row, Col} from 'antd';

const Main = styled.div`
  position: relative;
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
`;

export default function MainContainer() {
  return (
    <Main>
      <Card width="500px" height="500px">
        <Row style={{backgroundColor: 'red'}}>
          <Col style={{border: '1px solid black'}} span={5} offset={2}>
            <p> col 1 </p>
          </Col>
          <Col style={{border: '1px solid black'}} span={5} offset={2}>
            <p> col 2 </p>
          </Col>
          <Col style={{border: '1px solid black'}} span={6} offset={2}>
            <p> col 3 </p>
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor: 'blue'}} span={24}>
            {' '}
            cols
          </Col>
        </Row>
      </Card>
    </Main>
  );
}
