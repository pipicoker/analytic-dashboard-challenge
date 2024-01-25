import React from 'react'
import ProgressBar from './ProgressBar'

const TopPlatform = () => {
  return (
    <div className='h-[478px]  font-PJS bg-[#FFF] dark:bg-[#0D0D0D] lg:ml-5 rounded-lg pl-5 pr-4 pt-4 pb-8'>
        <div className='flex justify-between'>
            <h3 className='text-[#26282C] dark:text-[#D3D5D9] text-lg font-semibold'>Top Platform</h3>

            <button className='text-[#34CAA5] text-lg font-medium'>See All</button>
        </div>

        <ProgressBar />
    </div>
  )
}

export default TopPlatform