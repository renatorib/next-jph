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
      <Page className="home">
        <div className="users">
          {users && users.map(user => (
            <Link href={`/posts?userId=${user.id}`} key={user.id}>
              <div className="user">
                <div className="user-name">
                  <strong>{user.name} </strong>
                  <span>@{user.username.toLowerCase()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style jsx>{`
          .users {
            padding: 20px;
          }

          .user {
            padding: 10px;
            border: 1px solid #ddd;
            background: #fafafa;
            border-radius: 4px;
            cursor: pointer;
            transition: all 300ms ease;
          }

          .user:hover {
            opacity: 0.5;
          }

          .user:active {
            transform: translate3d(5px, 0, 0);
          }

          .user:not(:last-child) {
            margin-bottom: 20px;
          }
        `}</style>
      </Page>
    );
  }
}

export default Home;
