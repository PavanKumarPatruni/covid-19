import React from 'react';

import Header from '../components/Header';
import Covid from '../containers/Covid';

import './App.scss';

const App = () => {
  return (
    <div>
      <Header style={{ 'animation-delay': '1s' }} />
      <Covid style={{ 'animation-delay': '2s' }} />
    </div>
  );
};

export default App;
