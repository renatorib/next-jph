import React from 'react';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <CenterMessage>
      Next.js JsonPlaceholder sample app by&nbsp;
      <a href="http://github.com/renatorib" target="_blank" rel="noopener noreferrer">
        @renatorib
      </a>
    </CenterMessage>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 30px;
  border-top: 1px solid #EEEEEE;
`;

const CenterMessage = styled.div`
  padding: 30px 0;
  text-align: center;
  color: #BBBBBB;
  font-size: 12px;

  a {
    color: #8888AA;
    text-decoration: none;
  }
`;
