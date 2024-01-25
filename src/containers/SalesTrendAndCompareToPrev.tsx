import React from 'react'
import SalesTrendChart from '../components/SalesTrendChart'
import CompareToPrevMonth from '../components/CompareToPrevMonth'

const SalesTrendAndCompareToPrev = () => {
  return (
    <div className='grid  grid-cols-7'>
        <div className='col-span-4'>
         <SalesTrendChart />
        </div>
        <div className='col-span-3'>
            <CompareToPrevMonth />
        </div>
        
    </div>
  )
}

export default SalesTrendAndCompareToPrev