// @flow

import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { initials } from '../../utils';

const Wrapper = styled.div`
  width: ${prop('size', 30)}px;
  height: ${prop('size', 30)}px;
  background: ${prop('color', '#aaa')};
  color: white;
  border-radius: ${prop('size', 30)}
`;

type Props = {
  name: string,
  size?: number,
};

const UserThumb = ({ name, size }: Props) => (
  <Wrapper size={size}>
    {initials(name)}
  </Wrapper>
);

export default UserThumb;
