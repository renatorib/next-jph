// @flow

import React, { Component } from 'react';
import { Page } from '../components';
import { Posts } from '../layouts';
import { api } from '../utils';

class PostsPage extends Component {
  static async getInitialProps({ query: { userId } }) {
    const user = await api.getUser(userId);
    const posts = await api.getPostsByUserId(userId);

    return {
      user: user.data,
      posts: posts.data,
    };
  }

  render() {
    return (
      <Page>
        <Posts {...this.props} />
      </Page>
    );
  }
}

export default PostsPage;
