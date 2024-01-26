import React, {useEffect, useRef} from 'react'
import {useAnimation, motion, useInView} from 'framer-motion'
import ProgressBar from './ProgressBar'

const TopPlatform = () => {
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
    className='h-[478px]  font-PJS bg-[#FFF] dark:bg-[#0D0D0D] lg:ml-5 rounded-lg pl-5 pr-4 pt-4 pb-8'>
        <div className='flex justify-between'>
            <h3 className='text-[#26282C] dark:text-[#D3D5D9] text-lg font-semibold'>Top Platform</h3>

            <button className='text-[#34CAA5] text-lg font-medium'>See All</button>
        </div>

        <ProgressBar />
    </motion.div>
  )
}

export default TopPlatform