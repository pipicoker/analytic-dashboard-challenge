import React, {useEffect, useRef} from 'react'
import {useAnimation, motion, useInView} from 'framer-motion'
import LastOrdersTable from './LastOrdersTable'

const LastOrders = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
      if(inView) {
          controls.start('visible')
      }
      else{
          controls.start('hidden')
      }
  }, [controls, inView])

  return (
    <motion.div 
    ref={ref}
    animate={controls}
    variants={{
      hidden: {opacity: 0,  y: 75,},
      visible: {opacity: 1,  y: 0,},
    }}
    transition={{duration: 1, }}
    className='lg:h-[422px]  px-5 pt-[18px] pb-[31px] bg-[#FFF] dark:bg-[#0D0D0D] border border-[#EDF2F7] dark:border-[#1A1A1A] font-PJS rounded-[14px]'>
        <div className='flex justify-between'>
            <h3 className='text-[#26282C] dark:text-[#414f6b] text-lg font-semibold'>Last Orders</h3>
            <button className='text-[#34CAA5] font-medium text-lg'>See All</button>
        </div>

        <LastOrdersTable />
    </motion.div>
  )
}

export default LastOrders 