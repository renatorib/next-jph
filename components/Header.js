import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '.';

export default () => (
  <Wrapper>
    <Fixed>
      <Container>
        <Flex>
          <Logo>
            <Link href="/"><a>Next JPH</a></Link>
          </Logo>
          <Links>
            <a href="http://github.com/renatorib/next-jph">Github</a>
          </Links>
        </Flex>
      </Container>
    </Fixed>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 50px;
`;

const Fixed = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #EEE;
  background: white;
  position: fixed;
  z-index: 99;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  a {
    color: #888;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 22px;
    text-decoration: none;
    transition: all 1s ease;

    &:hover {
      color: #9b59b6;
    }
  }
`;

const Links = styled.div`
  a {
    color: #AAAAFF;
    transition: all 200ms ease;
    text-decoration: none;
    font-weight: 400;

    &:hover {
      opacity: 0.4;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
