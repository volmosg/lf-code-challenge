import React from 'react';
import Hello from './components/Hello';
import Header from './components/Header';
import Premise from './components/Premise';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Premise />
      <Hello />
      <Footer />
    </div>
  );
}

export default App;
