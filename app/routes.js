import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Users from './layouts/users';

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Usuarios'>
      <Drawer.Screen name="Usuarios" component={Users} />
    </Drawer.Navigator>
  );
}

export default RootNavigator;