import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import profile from '../assets/images/profile-picture.jpg'

import { selectTheme } from '../redux/theme.Slice'

const UserProfileDropdown = () => {
    const theme = useSelector(selectTheme)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
        
    }
  return (
    <div className='ml-5'>

<div className=' flex md:hidden justify-end  -mb-4'>
                    <div className={theme === "light" ? 'flex' : 'hidden'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z" fill="#0D062D"/>
                    </svg>
                    </div>
                    
                    <div className={theme === "light" ? 'hidden' : 'flex'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7061 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91413 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z" fill="#D9D2F9"/>
                    </svg>
                    </div>
                </div>




            <div className='flex items-center gap-x-3  rounded-[28px] border border-[#DADDDD] dark:border-[#2F3232] py-1.5 px-2'>

                <img src={profile} alt="profile pix" className='w-[38px] h-[38px] rounded-[19px]'/>

                <div className='hidden md:flex md:flex-col text-right' >
                <p className='text-[#26282C] dark:text-[#D3D5D9]'>Justin Bergson</p>
                <p className='text-sm text-[#787486] dark:text-[#787486]'>Justin@gmail.com</p>
                </div>
                <button className='hidden md:flex'  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button"
                onClick={toggleDropdown}
                >
                    <div className={theme === "light" ? 'flex' : 'hidden'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
                        </svg>
                    </div>

                    <div className={theme === "light" ? 'hidden' : 'flex'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#D9D2F9"/>
                        </svg>
                    </div>
                </button>
            </div>


            



        {isDropdownOpen && (
                    <div id="dropdown" className="hidden bg-[#FAFAFA] dark:bg-[#1A222A] absolute mt-2 mr-4 p-4 rounded-xl text-[#787486] dark:text-[#787486] border border-[#DADDDD] dark:border-[#2F3232] md:flex flex-col divide-y space-y-3 text-xs">
                        <p >Full Name: <span className='text-sm text-[#26282C] dark:text-[#D3D5D9]'>Justin Bergson </span></p>
                        <p >Phone Number: <span className='text-sm text-[#26282C] dark:text-[#D3D5D9]'>+234 5412784</span></p>
                        <p>Age: <span className='text-sm text-[#26282C] dark:text-[#D3D5D9]'>32 years</span></p>
                        <p>sex: <span className='text-sm text-[#26282C] dark:text-[#D3D5D9]'>Male</span></p>
                    
                </div>

                )}


    </div>
  )
}

export default UserProfileDropdown