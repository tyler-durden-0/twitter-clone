import React from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './pages/SignIn'
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
