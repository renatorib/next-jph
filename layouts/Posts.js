// @flow

import type { Post, User } from '../utils/types';
import React from 'react';
import styled from 'styled-components';
import { Header, Footer, Container } from '../components';
import { capitalizefl } from '../utils';

type Props = {
  posts: Post[],
  user: User,
};

export default ({ posts, user }: Props) => (
  <Wrapper>
    <Header />
    <PostsContained>
      <Title>
        <span>posts from</span>
        <h1>{user.name}</h1>
      </Title>

      {posts && posts.map(post => (
        <PostContent>
          <h2>{capitalizefl(post.title)}.</h2>
          <p>{capitalizefl(post.body)}.</p>
        </PostContent>
      ))}
    </PostsContained>
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
  background: #FFF;
`;

const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;

  @media (min-width: 600px) {
    &:before, &:after {
      content: "";
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      width: 46px;
      height: 1px;
      background: #eee;
      margin: 0 30px;
      left: 0;
      top: 50%;
    }

    &:after {
      left: auto;
      right: 0;
    }
  }

  span {
    font-size: 12px;
    color: #BBBBBB;
    font-style: italic;
    letter-spacing: 2px;
  }

  h1 {
    font-family: 'IM Fell Double Pica';
    color: #3498db;
    text-align: center;
    font-weight: italic;
    font-weight: normal;
    margin: 0;
    font-size: 38px;
  }
`;

const PostsContained = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostContent = styled.div`
  margin-top: 30px;
  color: #888;

  h2 {
    color: #897492;
    font-family: 'Sansita';
    font-size: 30px;
    line-height: 1.1em;
    letter-spacing: 1px;
  }

  p {
    letter-spacing: 0.3px;
    line-height: 1.42em;
    font-size: 18px;
    color: #aaa;
  }
`;
