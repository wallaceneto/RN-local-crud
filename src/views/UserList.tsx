import React from 'react';
import {FlatList, View} from 'react-native';

import users from '../data/users';
import User from '../types/userType';
import {Avatar, ListItem} from 'react-native-elements';

export default function UserList(props: any) {
  function getUserItem({item}: {item: User}) {
    return (
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar source={{uri: item.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
}
