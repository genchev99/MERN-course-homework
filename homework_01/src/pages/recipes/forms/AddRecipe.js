import React, {useContext} from 'react';
import UsersContext from '../../../contexts/data';
import User from "../../../contexts/data/user";

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