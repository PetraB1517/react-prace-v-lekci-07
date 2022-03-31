import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Komponenta from './components/Komponenta';

const App = () => {
  return (
    <>
      <h1>Práce v lekci 7</h1>
      <hr />
      <Komponenta />
    </>
  );
}

render(<App />, document.querySelector('#app'));
