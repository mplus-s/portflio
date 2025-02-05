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
  align-items: center;
  margin-left: 10px;
  flex-wrap: wrap;
  padding: 20px;
`;

export default function MainContainer() {
  return (
    <Main>
      <Card width="500px" height="350px">
        {/* <Row style={{backgroundColor: 'red'}}> */}

{/* row1 */}
          <Row> Mark Attendence
          <Col style={{ border: '1px solid black' }} span={12} offset={11}>
            <p> Work From Home </p>
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor: ' rgb(76, 76, 78)'}} span={24}>
            cols
          </Col>
        </Row>
{/* row2 */}
        <Row>
          <Col style={{ border: '1px solid black' }} span={24} offset={0}>
            <p> June - Thursday </p>
          </Col>
        </Row>
{/* row3 */}

        <Row>
          <Col style={{backgroundColor: 'rgb(76, 76, 78)'}} span={24} >
            Blue Cube Head Office
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor: 'rgb(76, 76, 78)'}} span={24}>
            You Clocked On
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor: 'rgb(76, 76, 78)'}} span={24}>
            cols
          </Col>
        </Row>
      
{/* row4 */}
        <Row>
          <Col style={{ border: '1px solid black' }} span={10} offset={1}>
            <p> Out for Lunch </p>
          </Col>
          <Col style={{ border: '1px solid black' }} span={10} offset={2}>
            <p> Out For Break </p>
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor: 'rgb(76, 76, 78)'}} span={24}>
            cols
          </Col>
        </Row>
{/* row5 */}
        <Row>
          <Col style={{ border: '1px solid black' }} span={18} offset={3}>
            <p> Clock Out </p>
          </Col>
        </Row>


      </Card>
    </Main>
  );
}
