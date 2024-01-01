import React from 'react';
import {Alert, FlatList, View} from 'react-native';

import users from '../data/users';
import User from '../types/userType';
import {Avatar, Button, Icon, ListItem} from 'react-native-elements';

export default function UserList(props: any) {
  function confirmUserDeletion(item: User) {
    Alert.alert('Excluir Usuário', 'Deseja mesmo excluir esse usuário?', [
      {
        text: 'sim',
        onPress() {
          console.warn('delete usuer ' + item.id);
        },
      },
      {
        text: 'não',
      },
    ]);
  }

  function getUserItem({item}: {item: User}) {
    return (
      <ListItem bottomDivider>
        <Avatar source={{uri: item.avatarUrl}} />

        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>

        <Button
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
          onPress={() => props.navigation.navigate('UserForm', item)}
        />
        <Button
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
          onPress={() => confirmUserDeletion(item)}
        />
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
