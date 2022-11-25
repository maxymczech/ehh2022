import './App.css';
import NavigationContainer from './navigation/NavigationContainer';
import React from 'react';
import {createRoot} from 'react-dom/client';

const domContainer = document.getElementById('site-root');
const root = createRoot(domContainer);

root.render(
  <React.StrictMode>
    <NavigationContainer />
  </React.StrictMode>
);
