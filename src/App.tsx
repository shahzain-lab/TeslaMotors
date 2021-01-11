import React from 'react';
import './App.css';
import {Background, Contents, Interior, FeedBack, Subscribe, Footer } from './components/index';

function App() {
  return (
    <div>
    <Background />
    <Contents />
    <Interior />
    <Subscribe />
    <FeedBack />
    <Footer />
    </div>
  );
}

export default App;
