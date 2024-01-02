import React, {createContext, useReducer} from 'react';

import users from '../data/users';
import User from '../types/UserType';

type UsersState = {
  users: User[];
};

type Action =
  | {type: 'CREATE_USER'; payload: any}
  | {type: 'DELETE_USER'; payload: any}
  | {type: 'UPDATE_USER'; payload: any};

const initialState: UsersState = {users};
const UsersContext = createContext<UsersState | {}>({});

export const UsersProvider = (props: any) => {
  function reducer(state: UsersState, action: Action): UsersState {
    const user = action.payload;

    switch (action.type) {
      case 'CREATE_USER':
        user.id = Math.random();
        return {...state, users: [...users, user]};

      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map(u => (u.id === user.id ? user : u)),
        };

      case 'DELETE_USER':
        return {...state, users: state.users.filter(u => u.id !== user.id)};

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
