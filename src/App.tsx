import React from 'react';
import './App.css';
import Header from './containers/Header';
import Sidebar from './components/Sidebar';
import SalesTrendChart from './components/SalesTrendChart';

function App() {
  return (
    <div className="App font-PJS flex bg-[#FAFAFA] dark:bg-[#1A222A]">
      <Sidebar />
      <div className='w-full'>
        <Header/>
        <div className=''>
         <SalesTrendChart />

        </div>
          
        
      </div>
      
    </div>
  );
}

export default App;
