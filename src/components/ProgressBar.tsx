import React from 'react'
import { progressBarData } from '../assets/data/progressbar'

const ProgressBar = () => {
  return (
    <div className='mt-5 flex flex-col gap-y-5   h-[410px]  pb-20 lg:pb-0 overflow-auto no-scrollbar'>
        {progressBarData.map((data, index:number) => (
            <div key={index} className=''>
                <p className='text-[#22242C] dark:text-[#D3D5DD] text-lg font-semibold'>{data.platform}</p>

                <div className='lg:w-[452px] h-3 bg-[#F5F5F5] dark:bg-[#171717] mt-[17px]'>
                <div style={{width: `${data.progress}%`, background: data.color}} className='h-3 rounded-[40px]' data-testid={`progress-bar-${index}`} >
                </div>
                </div>

                <div className='flex justify-between mt-4 text-[#525252] text-lg'>
                    <p>${data.amount}</p>
                    <p>+{data.percentage}%</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProgressBar