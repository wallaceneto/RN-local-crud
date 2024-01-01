import React, {createContext} from 'react';

import users from '../data/users';

const UsersContext = createContext<any>({});

export const UsersProvider = (props: any) => {
  return (
    <UsersContext.Provider
      value={{
        state: {
          users,
        },
      }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
