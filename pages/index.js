// @flow

import React, { Component } from 'react';
import { Page } from '../components';
import { Users } from '../layouts';
import { api } from '../utils';

class UsersPage extends Component {
  static async getInitialProps() {
    const users = await api.getUsers();

    return {
      users: users.data,
    };
  }

  render() {
    return (
      <Page>
        <Users {...this.props} />
      </Page>
    );
  }
}

export default UsersPage;
