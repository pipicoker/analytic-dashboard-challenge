import React from 'react';
import './App.css';
import Header from './containers/Header';
import Sidebar from './components/Sidebar';
import SalesTrendAndCompareToPrev from './containers/SalesTrendAndCompareToPrev';
import LastOrdersAndTopPlatform from './containers/LastOrdersAndTopPlatform';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="App font-PJS flex bg-[#FAFAFA] dark:bg-[#1A222A]">
      <div className='hidden lg:flex'>
        <Sidebar />
      </div>
     
      <div className='w-full  divide-y divide-[#E5EAEF] dark:divide-[#121212]'>
        <Header/>
        <div>
          <SalesTrendAndCompareToPrev />
          <LastOrdersAndTopPlatform />

        </div>
        
      </div>

      <MobileNav />
      
      
    </div>
  );
}

export default App;
