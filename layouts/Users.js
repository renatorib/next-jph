// @flow

import type { User } from '../utils/types';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Header, Footer, UserThumb, Container } from '../components';

type Props = {
  users: User[],
};

export default ({ users }: Props) => (
  <Wrapper>
    <Header />
    <UsersContained>
      {users && users.map(user => (
        <Link href={`/posts?userId=${user.id}`} key={user.id}>
          <UserCard>
            <UserThumb name={user.name} color="#3498db" />
            <UserContent className="name">
              <h2>{user.name}</h2>
              <span>Read posts from @{user.username.toLowerCase()}</span>
            </UserContent>
          </UserCard>
        </Link>
      ))}
    </UsersContained>
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
  background: #FFF;
`;

const UsersContained = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserCard = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  transition: all 400ms ease;
  margin-top: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transform: translate(0, -2px);
  }

  > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const UserContent = styled.div`
  h2 {
    margin: 0;
    font-family: 'Sansita';
    letter-spacing: 1px;
    color: #897492;
    font-size: 20px;
  }

  span {
    color: #bbb;
    font-size: 14px;
    letter-spacing: 0.6px;
    padding-top: 10px;
  }
`;
