import './App.scss';
import NavigationContainer from './navigation/NavigationContainer';
import React from 'react';
import {SessionProvider} from './contexts/SessionContext';
import {createRoot} from 'react-dom/client';

const domContainer = document.getElementById('site-root');
const root = createRoot(domContainer);

root.render(
  <React.StrictMode>
    <SessionProvider>
      <NavigationContainer />
    </SessionProvider>
  </React.StrictMode>
);
