import React, {  useEffect } from 'react'
import icons from '../assets/nav-icons'
import {  useDispatch, useSelector } from 'react-redux'

import { selectTheme, setTheme } from '../redux/theme.Slice'

const Sidebar = () => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])

  const handleThemeSwitch = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"))
  }

  return (
    <nav className='pt-5 px-5 flex flex-col items-center bg-[#F7F8FA] border-r border-r-[#EBECF2]'>
        <div >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5"/>
          </svg>
        </div>

        <div className='mt-7 flex flex-col space-y-8'>
  {icons.slice(0, 6).map((icon, index) => (
    <div key={index} className=''>
      {icon}
    </div>
  ))}
</div>

        <div className='mt-6 bg-[#FFF] rounded-full p-2 flex  flex-col items-center space-y-4'>
          {icons.slice(6, 8).map((icon, index) => (
            <div key={index} className={index === 0 ?  'bg-[#34CAA5] px-[7.5px] py-[6.56px] flex justify-center  rounded-[94px] items-center' : "bg-[#FFF"} 
            onClick={handleThemeSwitch}
            >{icon}</div>
          ))}
        </div>



        <div className='mt-[202px] space-y-6'>
            {icons.slice(8, 11).map((icon, index) => (
                <div key={index}>
                    {icon}
                </div>
            ))}
        </div>
        
        </nav>
  )
}

export default Sidebar