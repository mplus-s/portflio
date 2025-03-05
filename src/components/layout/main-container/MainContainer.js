import React from 'react';
import styled from 'styled-components';
import Card from './../../cards/Card';
import {Row, Col} from 'antd';
import MiniNav from '../../mini-nav/MiniNav';

const Main = styled.div`
  position: relative;
  background: linear-gradient(135deg, #616066, #4f4e53);
  border: 1px solid white;
  border-radius: 30px;
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
gap: 15px;
`;
const SectionTitle = styled.div`
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;

`;
const Subtitle = styled.p`
  font-size: 12px;
  color: gray;
  margin: 5px 0 10px;
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

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  // border: none;
  background: rgba(255, 255, 255, 0.1);
  color: black;
  margin-bottom: 10px;
  cursor: pointer;
`;
const FillButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: blue;
  color: white;
  // border: none;
  cursor: pointer;

`;
const FillButtonApprove = styled.button`
  width: 25%;
  padding: 5px;
  border-radius: 10px;
  background: rgb(76, 76, 78);
  color: white;
  // border: none;
  cursor: pointer;

`;
const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Indicator = styled.p`
  font-size: 12px;
  color: ${(props) => (props.positive ? "lightgreen" : "red")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  margin-top: 0.01px;
   margin-bottom: 15px;
`;

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const Percentage = styled.span`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: bold;
`;
const PlusIcon = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 25px;
   cursor: pointer;
`;

const AddWidgetText = styled.p`
  font-size: 14px;
  margin-top: 5px;
   text-align: center;
   cursor: pointer;
`;


export default function MainContainer() {
  return (
    <Main>
      <Card width="500px" height="280px">

        {/* row1 */}
        <Row>
          <Col span={6} offset={1}> <p style={{ fontSize: '15px', fontWeight: 'bold' }}>  Mark Attendence </p> </Col>
          
          <Col span={6} offset={6}>
            <MiniNav /> </Col>
        </Row>

        {/* row2 */}
        <Row >
          <Col span={24} offset={0}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}> 📅 June - Thursday </p>
          </Col>
        </Row>

        {/* row3 */}
        <Row>
          <Col  span={24}>
          📍 Blue Cube Head Office
          </Col>
        </Row>
        <Row>
          <Col  span={24}>
          ⏰ You Clocked In 12:40 AM
          </Col>
        </Row>
        
        <Row style={{marginTop: '20px'}}> </Row>

        {/* row4 */}
        <Row>
          <Col span={10} offset={1}>
          <button style={{
        width: '100%',
        padding: '10px',
        borderRadius: '30px',
        backgroundColor: 'blue',
        color: 'white',
        // border: 'none',
        fontWeight: 'bold'
      }}>
        Out for Lunch
      </button>
          </Col>

          <Col span={10} offset={2}>
          <button style={{
        width: '100%',
        padding: '10px',
        borderRadius: '30px',
        backgroundColor: ' rgb(76, 76, 78)',
        color: 'white',
        // border: 'none',
        fontWeight: 'bold'
      }}>
        Out for Break
      </button>
          </Col>
        </Row>

        <Row style={{marginTop: '20px'}}> </Row>
        {/* row5 */}
        <Row>
          <Col span={22} offset={1}>
          <button style={{
        width: '100%',
        padding: '10px',
        borderRadius: '30px',
        backgroundColor: 'rgb(76, 76, 78)',
        color: 'red',
        // border: '1px solid red',
       
      }}>
        🔒 Clock Out
      </button>
          </Col>
        </Row>
      </Card>


      <Card width="280px" height="280px" marginRight= "20px">
        <SectionTitle style={{  margin: "5px" }} >📝 Leaves Summary <Percentage  style={{color:"grey"}} >This Year</Percentage> </SectionTitle> 
        <StatNumber>2024</StatNumber>
        <Indicator style={{ justifyContent: "flex-start", color: 'grey', margin: "6px"  }}> Annual Leave </Indicator>
        <ProgressBar progress="100%" color="gray"><div /></ProgressBar>
        <Indicator style={{ justifyContent: "flex-start", color: 'grey' , margin: "10px" }}> Unpaid Leave: 12/15 </Indicator>
        <ProgressBar progress="80%" color="gray"><div /></ProgressBar>
        <Indicator style={{ justifyContent: "flex-start", color: 'grey', margin: "10px" }}> Sick Leave: 5/8 </Indicator>
        <ProgressBar progress="60%" color="gray"><div /></ProgressBar>
        <Indicator style={{ justifyContent: "flex-start", color: 'white' , margin: "10px" }}> Casual Leave: 2/5 </Indicator>
        <ProgressBar progress="40%" color="blue"><div /></ProgressBar>
        <Indicator style={{ justifyContent: "flex-start", color: 'white' , margin: "10px" }}> Bereavement Leave: 1/3 </Indicator>
        <ProgressBar progress="20%" color="blue"><div /></ProgressBar>
      </Card>

      <Card width="280px" height="280px">
        <SectionTitle>⏳ Waiting for Approval</SectionTitle>
        <Subtitle> 5 Pending Approvals </Subtitle>

        <SectionTitle>Valeria Garza <FillButtonApprove >Approve</FillButtonApprove></SectionTitle>
        <Subtitle style={{ justifyContent: "flex-start", margin: "2px" }}> Promotion </Subtitle>

        <SectionTitle>Marci Senter<FillButtonApprove >Approve</FillButtonApprove></SectionTitle>
        <Subtitle style={{ justifyContent: "flex-start", margin: "2px" }}>HR Letters </Subtitle>

        <SectionTitle>Donal Roche<FillButtonApprove >Approve</FillButtonApprove> </SectionTitle>
        <Subtitle style={{ justifyContent: "flex-start", margin: "1px" }}> Leave </Subtitle>


      </Card>

      <Card width="250px" height="120px">
        <SectionTitle>Income</SectionTitle>
        <Indicator positive style={{ justifyContent: "flex-start", textAlign: "left" }}> ↑ -7.2% </Indicator>
        <StatNumber>$12,800.00</StatNumber>
      </Card>

      <Card width="250px" height="120px" >
        <SectionTitle>Expenses</SectionTitle>
        <Indicator style={{ justifyContent: "flex-start", textAlign: "left" }}> ⬇ -12.2% </Indicator>
        <StatNumber>$2,800.00</StatNumber>
      </Card>

      <Card width="120px" height="120px" >
        <SectionTitle>Messages</SectionTitle>
        <Indicator style={{ justifyContent: "flex-start", textAlign: "left", color: 'white' }}> + 2 unread </Indicator>
        <StatNumber>15</StatNumber>
      </Card>

      <Card width="120px" height="120px" >
        <SectionTitle>HR Letters</SectionTitle>
        <Indicator style={{ justifyContent: "flex-start", textAlign: "left", color: 'white' }}> Status </Indicator>
        <StatNumber>21</StatNumber>
      </Card>


      <Card width="250px" height="250px">
        <SectionTitle  >📊 Attendance Summary</SectionTitle>
        <Subtitle>This Month</Subtitle>

        <ProgressBar progress="80%" color="blue" ><div /></ProgressBar>
        <ProgressContainer>
        <StatNumber>6.75</StatNumber>
        <Percentage color="lightgreen">80.2%</Percentage>
      </ProgressContainer>
      <Subtitle>Avg Time Spent Hours  <Indicator positive>↑ Higher</Indicator></Subtitle>
       

        <ProgressBar progress="12%" color="red"><div /></ProgressBar>
        <ProgressContainer>
        <StatNumber>02</StatNumber>
        <Percentage color="red">12.4%</Percentage>
        </ProgressContainer>
        <Subtitle>Total Late (days)  <Indicator>↑ 1 late remaining</Indicator></Subtitle>
       
      </Card>


      <Card width="280px" height="120px">
        <SectionTitle>📄 Forms</SectionTitle>
        <Select color="white"> 
          <option>Select Form</option>
          <option>Leave Form</option>
          <option>HR Request</option>
        </Select>
        <FillButton>Fill Form</FillButton>
      </Card>

      <Card width="280px" height="120px">
      <PlusIcon>+</PlusIcon>
      <AddWidgetText>Add widget</AddWidgetText>
      </Card>

    </Main>
  );
}
