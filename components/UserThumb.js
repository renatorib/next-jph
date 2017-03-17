// @flow

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { initials } from '../utils';

type Props = {
  name: string,
};

export default ({ name, ...restProps }: Props) => (
  <Wrapper {...restProps}>
    {initials(name)}
  </Wrapper>
);

const Wrapper = styled.div`
  width: ${prop('size', 50)}px;
  height: ${prop('size', 50)}px;
  background: ${prop('color', '#aaaaaa')};
  color: white;
  border-radius: ${prop('size', 50)}px;
  font-size: 20px;
  line-height: ${prop('size', 50)}px;
  text-align: center;
  font-weight: 400;
`;
