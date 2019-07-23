import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import CheckBoxSimple from './components/CheckBoxSimple'

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <CheckBoxSimple />
      <CheckBoxSimple />
      <CheckBoxSimple />
      <CheckBoxSimple />
      <Footer />
    </div>
  );
}

export default App;
