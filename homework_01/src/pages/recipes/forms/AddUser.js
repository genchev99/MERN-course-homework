import React, {useContext} from 'react';
import UsersContext from '../../../contexts/users';
import User from "../../../contexts/users/user";

const AddUser = () => {
  const {createUser} = useContext(UsersContext);

  return (
    <div>
      <button onClick={() => createUser(new User({
        id: '123',
      }))}>Add new user</button>
    </div>
  );
};

export default AddUser;