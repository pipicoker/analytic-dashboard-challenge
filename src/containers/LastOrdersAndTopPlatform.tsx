import React from 'react'
import LastOrders from '../components/LastOrders'
import TopPlatform from '../components/TopPlatform'

const LastOrdersAndTopPlatform = () => {
  return (
    <div className='mt-5 mx-5 grid grid-cols-7'>
      <div className='col-span-4'>
        <LastOrders />
      </div>

      <div className='col-span-3'>
        <TopPlatform />
      </div>
      
      
    </div>
  )
}

export default LastOrdersAndTopPlatform