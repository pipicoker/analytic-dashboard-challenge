import React, {  useEffect , useState} from 'react'
import icons from '../assets/data/nav-icons'
import { useDispatch, useSelector } from 'react-redux'

import { selectTheme, setTheme } from '../redux/theme.Slice'
const MobileNav = () => {
    const theme = useSelector(selectTheme)
    const [activebtn, setActivebtn] = useState(0)

    const dispatch = useDispatch()
  
    const handleThemeSwitch = (index: number) => {
        dispatch(setTheme(theme === "dark" ? "light" : "dark"))
        setActivebtn(index)
      }


    useEffect(() => {
      if(theme === "dark") {
        document.documentElement.classList.add('dark')
      }
      else {
        document.documentElement.classList.remove('dark')
      }
  
    }, [theme])
  
    
  return (
    <nav className='w-screen py-4 px-2  bottom-0 fixed flex lg:hidden space-x-6 md:space-x-12 items-center md:justify-center bg-[#F7F8FA] dark:bg-[#131313] border-r border-r-[#EBECF2] dark:border-r-[#171823] overflow-x-scroll no-scrollbar'>
        

          <div  className={theme === 'light' ? 'flex  items-center space-x-6 md:space-x-12 order-2 ml-6' : 'hidden'}
          >
            {icons.slice(0, 6).map((icon, index) => (
              index !== 1 && (
                <div key={index}>
                  {icon}
                </div>
              )
              
            ))}
          </div>

          <div className={theme === 'dark' ?  ' flex  items-center space-x-12 order-2' : 'hidden'}>
            {icons.slice(1, 6).map((icon, index) => (
              <div key={index} className=''>
                {icon}
              </div>
            ))}
          </div>

          <div className='order-1  bg-[#FFF] dark:bg-[#0D0D0D] rounded-full p-2 flex   items-center space-x-6'>
          {icons.slice(7, 9).map((icon, index: number) => (
            <div 
            key={index} 
            className={index === activebtn ?  'bg-[#34CAA5] w-[30px] h-[30px] flex   rounded-full items-center justify-center' : "bg-[#FFF"} 
            onClick={() => handleThemeSwitch(index)}
            >{icon}</div>
          ))}
        </div>



        <div className=' flex items-center space-x-12 order-3'>
            {icons.slice(9, 12).map((icon, index) => (
                <div key={index}>
                    {icon}
                </div>
            ))}
        </div>
        
        </nav>
  )
}

export default MobileNav