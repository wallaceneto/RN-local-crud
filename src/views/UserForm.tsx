import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import UsersContext from '../context/UsersContext';

export default function UserForm(props: any) {
  const [user, setUser] = useState(
    props.route.params ? props.route.params : {},
  );
  const {dispatch}: any = useContext(UsersContext);

  return (
    <View style={styles.form}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={user.name}
        placeholder="Informe o nome"
        onChangeText={name => setUser({...user, name})}
      />

      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={user.email}
        placeholder="Informe o e-mail"
        onChangeText={email => setUser({...user, email})}
      />

      <Text>Avatar:</Text>
      <TextInput
        style={styles.input}
        value={user.avatarUrl}
        placeholder="Informe a URL do avatar"
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
      />

      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'UPDATE_USER' : 'CREATE_USER',
            payload: user,
          });
          props.navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 5,
  },
});
