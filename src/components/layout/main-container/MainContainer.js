import React from 'react';
import styled from 'styled-components';
import Card from './../../cards/Card';
import {Row, Col} from 'antd';
import MiniNav from '../../mini-nav/MiniNav';

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
const SectionTitle = styled.div`
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  height: 5px;
  width: 100%;
  margin-top: 5px;

  div {
    height: 100%;
    border-radius: 10px;
    background: ${(props) => props.color || 'blue'};
    width: ${(props) => props.progress || '50%'};
  }
`;

export default function MainContainer() {
  return (
    <Main>
      <Card width="500px" height="280px">

        {/* row1 */}
        <Row>
          <Col span={6} offset={1}> <p>  Mark Attendence </p> </Col>
          <Col style={{border: '1px solid black'}} span={12} offset={4}>
            <MiniNav /> </Col>
        </Row>

        {/* row2 */}
        <Row style={{marginTop: '10px'}}>
          <Col style={{border: '1px solid black'}} span={24} offset={0}>
            <p> 📅 June - Thursday </p>
          </Col>
        </Row>
        {/* row3 */}

        <Row>
          <Col style={{backgroundColor: 'rgb(76, 76, 78)'}} span={24}>
          📍 Blue Cube Head Office
          </Col>
        </Row>
        <Row>
          <Col style={{backgroundColor: 'rgb(76, 76, 78)'}} span={24}>
          ⏰ You Clocked On
          </Col>
        </Row>
        <Row style={{marginTop: '20px'}}> </Row>

        {/* row4 */}
        <Row>
          <Col style={{border: '1px solid black'}} span={10} offset={2}>
            <p> Out for Lunch </p>
          </Col>
          <Col style={{border: '1px solid black'}} span={10} offset={2}>
            <p> Out For Break </p>
          </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
        </Row>
        {/* row5 */}
        <Row>
          <Col style={{border: '1px solid black'}} span={14} offset={10}>
            <p style={{ color: 'red' }}> Clock Out </p>
          </Col>
        </Row>
      </Card>


      <Card width="280px" height="280px">
        <SectionTitle>📝 Leaves Summary (2024)</SectionTitle>
        <p>Annual Leave: 15/15</p>
        <ProgressBar progress="100%" color="gray"><div /></ProgressBar>
        <p>Unpaid Leave: 12/15</p>
        <ProgressBar progress="80%" color="gray"><div /></ProgressBar>
        <p>Sick Leave: 5/8</p>
        <ProgressBar progress="60%" color="gray"><div /></ProgressBar>
        <p>Casual Leave: 2/5</p>
        <ProgressBar progress="40%" color="blue"><div /></ProgressBar>
      
      </Card>

      <Card width="280px" height="280px">
        <SectionTitle>⏳ Waiting for Approval</SectionTitle>
        <p>Valeria Garza - Promotion <button>Approve</button></p>
        <p>Marci Senter - HR Letters <button>Approve</button></p>
        <p>Donal Roche - Leave <button>Approve</button></p>
      </Card>

      <Card width="250px" height="120px">
        <SectionTitle>Income</SectionTitle>
        <p> $12,800.00</p>
        <p style={{ color: 'green' }}> 7.2% Higher</p>
      </Card>
      <Card width="250px" height="120px" >
        <SectionTitle>Expenses</SectionTitle>
        <p> $2,800.00</p>
        <p style={{ color: 'red' }}> 12.2%</p>
      </Card>

      <Card width="120px" height="120px" >
        <SectionTitle>Messages</SectionTitle>
        <p> +2 Unread Chats</p>
        <p> 15</p>
      </Card>

      <Card width="120px" height="120px" >
        <SectionTitle>HR Letters</SectionTitle>
        <p> Status </p>
        <p> 21</p>
      </Card>


      <Card width="250px" height="250px">
        <SectionTitle>📊 Attendance Summary</SectionTitle>
        <p>Avg Time Spent Hours: 6.75</p>
        <ProgressBar progress="80%" color="blue" ><div /></ProgressBar>
        <p>Total Late Days: 2</p>
        <ProgressBar progress="12%" color="red"><div /></ProgressBar>
      </Card>


      <Card width="280px" height="120px">
        <SectionTitle>📄 Forms</SectionTitle>
        <select>
          <option>Select Form</option>
          <option>Leave Form</option>
          <option>HR Request</option>
        </select>
        <button>Fill Form</button>
      </Card>

      <Card width="280px" height="120px">
      </Card>

    </Main>
  );
}
