import React from 'react'
import LastOrders from '../components/LastOrders'

const LastOrdersAndTopPlatform = () => {
  return (
    <div className='mt-5 mx-5 grid  grid-cols-7'>
      <div className='col-span-4'>
        <LastOrders />
      </div>
      
    </div>
  )
}

export default LastOrdersAndTopPlatform