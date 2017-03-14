// @flow

import type { Post, User } from '../utils/types';
import React, { Component } from 'react';
import Link from 'next/link';
import Page from '../components/Page';
import { api } from '../utils';

type Props = {
  user: User,
  posts: Post[],
};

class Posts extends Component {
  static async getInitialProps({ query: { userId } }) {
    const user = await api.getUser(userId);
    const posts = await api.getPostsByUserId(userId);

    return {
      user: user.data,
      posts: posts.data,
    };
  }

  props: Props

  render() {
    const { user, posts } = this.props;

    return (
      <Page className="posts">
        <div className="user">
          <h1>Posts from {user.name}</h1>
          <Link href="/"><a>Back to home</a></Link>
        </div>

        {posts && posts.map(post => (
          <div className="post" key={post.id} style={{ marginBottom: '20px' }}>
            <div className="post-title"><strong>{post.title}</strong></div>
            <div className="post-body">{post.body}</div>
          </div>
        ))}
      </Page>
    );
  }
}

export default Posts;
