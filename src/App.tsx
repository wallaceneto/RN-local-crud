/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Icon} from 'react-native-elements';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({navigation}) => {
            return {
              title: 'Lista de usuários',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('UserForm')}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{title: 'Formulário de usuários'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
