// @flow

import type { User } from '../utils/types';
import React, { Component } from 'react';
import Link from 'next/link';
import Page from '../components/Page';
import { api } from '../utils';

type Props = {
  users: User[],
};

class Home extends Component {
  static async getInitialProps() {
    const users = await api.getUsers();

    return {
      users: users.data,
    };
  }

  props: Props;

  render() {
    const { users } = this.props;

    return (
      <Page className="users">
        {users && users.map(user => (
          <div className="user" key={user.id}>
            <div className="user-name">
              <Link href={`/posts?userId=${user.id}`}>
                <strong>{user.name}</strong>
              </Link>
              <span>@{user.username.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </Page>
    );
  }
}

export default Home;
