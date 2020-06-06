import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import UsersContext from './contexts/data';
import Users from './pages/users/'
import Recipes from "./pages/recipes";

const App = () => {
  const fetchLocalStorage = () => {
    return ({
      users: JSON.parse(localStorage.getItem('users')),
      recipes: JSON.parse(localStorage.getItem('recipes')),
      assumed: localStorage.getItem('assumed'),
    });
  };

  const [data, setData] = useState(() => {
    return fetchLocalStorage();
  });

  const clearData = () => {
    localStorage.setItem('users', '[]');
    localStorage.setItem('recipes', '[]');
    localStorage.setItem('assumed', null);
  };

  const createUser = user => {
    localStorage.setItem('users', JSON.stringify([...data.users, user]));
    setData(fetchLocalStorage());
  };

  const assumeUser = _id => {
    if (data.users.filter(({id}) => id === _id).length) {
      localStorage.setItem('assumed', _id);
      fetchLocalStorage();
    }
  };

  useEffect(() => {
    /* Updates the user from the local storage on load */
    /* Init local storage if undefined */
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', '[]');
    }

    if (!localStorage.getItem('recipes')) {
      localStorage.setItem('recipes', '[]');
    }

    fetchLocalStorage();
  }, []);


  return (
    <Router>
      <UsersContext.Provider value={{
        data,
        createUser,
        clearData,
        assumeUser,
      }}>
        {/* Todo place the nav here */}

        <Switch>
          <Route path='/users'>
            <Users/>
          </Route>
        </Switch>
      </UsersContext.Provider>
    </Router>
  );
};

export default App;