import React from 'react';

export const AuthContext = React.createContext();

export const dataUser = {
  currentUser: {
    id: null,
    token: null,
    userId: null,
  },
};
