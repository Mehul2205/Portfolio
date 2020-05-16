import React from 'react';
import './App.css';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


function App() {
  return (
      <BrowserRouter>
            <Main />
      </BrowserRouter>
  );
}

export default App;
