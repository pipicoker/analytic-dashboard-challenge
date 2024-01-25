import React from 'react'
import SalesTrendChart from '../components/SalesTrendChart'
import CompareToPrevMonth from '../components/CompareToPrevMonth'

const SalesTrendAndCompareToPrev = () => {
  return (
    <div className='lg:grid  lg:grid-cols-7'>
        <div className='lg:col-span-4'>
         <SalesTrendChart />
        </div>
        <div className='lg:col-span-3'>
            <CompareToPrevMonth />
        </div>
        
    </div>
  )
}

export default SalesTrendAndCompareToPrev