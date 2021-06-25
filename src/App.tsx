import React from 'react';
import {SignIn} from './pages/SignIn'
import {Home} from './pages/Home'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
  );
}

export default App;
