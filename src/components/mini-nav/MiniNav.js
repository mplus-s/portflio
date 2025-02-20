import React, { useState } from 'react';
import { Segmented } from 'antd';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #2d2d2d;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 45px;
  width: 240px;
  border-radius: 25px;
  padding: 5px;
`;

export default function MiniNav() {
  const [value, setValue] = useState('Office');

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <MainContainer>
      <Segmented
      shape="round"
        options={['Work from Home', 'Office']}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: '#2d2d2d',
          width: '100%',
          borderRadius: '90px',
          minHeight: '30px',
        }}
      />
    </MainContainer>
  );
}
