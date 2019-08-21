import React from 'react';
import { Board } from './components/Board';
import Layout from './components/Layout';
import { PRODUCTS } from './constants';
import './App.css';

function App() {
    return (
      <div className="application">
          <Board products={PRODUCTS} />
          <Layout />
      </div>
    );
}

export default App;
