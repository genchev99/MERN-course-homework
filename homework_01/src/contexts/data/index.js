import React from 'react';
import User from './user';

export default React.createContext({
  data: {},
  createUser: user => {},
});