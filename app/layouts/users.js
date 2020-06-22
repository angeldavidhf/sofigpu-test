import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Layout, Avatar, Icon, List, ListItem, Spinner } from '@ui-kitten/components';
import api from '../constants';

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios(
        api.ULR,
      );

      setUser([...user, response.data.results])
    }

    getUsers()
  }, []);

  const renderItem = ({ item, index }) => (
    item.map((usr) => {
      return (
        <ListItem
          key={index}
          title={`${usr.name.first} ${usr.name.last}`}
          description={`${usr.email}`}
          accessoryLeft={() => <Avatar style={{}} size='medium' source={{uri: usr.picture.medium}}/>}
        />
      )
    })
  );

  if (user.length > 0) {
    return (
      <Layout>
        <List
          style={{ marginTop: 50 }}
          data={user}
          renderItem={renderItem}
        />
      </Layout>
    );
  }
  else {
    return (
      <Spinner size='large' />
    )
  }
}

export default Users;



