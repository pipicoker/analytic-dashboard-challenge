import React from 'react';
import './App.css';
import Header from './containers/Header';
import Sidebar from './components/Sidebar';
import SalesTrendAndCompareToPrev from './containers/SalesTrendAndCompareToPrev';

function App() {
  return (
    <div className="App font-PJS flex bg-[#FAFAFA] dark:bg-[#1A222A]">
      <Sidebar />
      <div className='w-full'>
        <Header/>
        <SalesTrendAndCompareToPrev />
          
        
      </div>
      
    </div>
  );
}

export default App;
