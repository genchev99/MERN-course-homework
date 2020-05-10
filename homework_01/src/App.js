import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import UsersContext from './contexts/users';

import Products from "./pages/products";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <UsersContext.Provider>
          {/* Todo place the nav here */}

          <Switch>
            <Route path='/users'>
              <Products/>
            </Route>
          </Switch>
        </UsersContext.Provider>
      </Router>
    );
  }
}