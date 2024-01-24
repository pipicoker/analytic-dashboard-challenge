import React from 'react';
import './App.css';
import Header from './containers/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App font-PJS flex">
      <Sidebar />
      <div className='w-full'>
        <Header/>
      </div>
      
    </div>
  );
}

export default App;
