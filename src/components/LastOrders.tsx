import React from 'react'
import LastOrdersTable from './LastOrdersTable'

const LastOrders = () => {
  return (
    <div className='px-5 pt-[18px] pb-[31px] bg-[#FFF] dark:bg-[#0D0D0D] border border-[#EDF2F7] dark:border-[#1A1A1A] font-PJS rounded-[14px]'>
        <div className='flex justify-between'>
            <h3 className='text-[#26282C] dark:text-[#D3D5D9] text-lg font-semibold'>Last Orders</h3>
            <button className='text-[#34CAA5] font-medium text-lg'>See All</button>
        </div>

        <LastOrdersTable />
    </div>
  )
}

export default LastOrders