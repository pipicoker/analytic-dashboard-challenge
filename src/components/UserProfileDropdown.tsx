import React, { useState } from 'react'
import profile from '../assets/images/profile-picture.jpg'

const UserProfileDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
        
    }
  return (
    <div>
        <div className='ml-5'>
    <div className='flex items-center gap-x-3  rounded-[28px] border border-[#DADDDD] py-1.5 px-2'>
    <img src={profile} alt="profile pix" className='w-[38px] h-[38px] rounded-[19px]'/>
    <div className='text-right'>
      <p className='text-[#26282C] '>Justin Bergson</p>
      <p className='text-sm text-[#787486]'>Justin@gmail.com</p>
    </div>
    <button  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button"
    onClick={toggleDropdown}
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
    </svg>
    </button>
    </div>

    {isDropdownOpen && (
                <div id="dropdown" className="bg-[#F7F8FA] absolute mt-5 p-4 rounded-xl text-[#26282C]">
                    <p>Full Name: Justin Bergson </p>
                    <p>Phone Number: +234 5412784</p>
                    <p>Age: 32 years</p>
                    <p>sex: Male</p>
                
            </div>

            )}


  </div>
    </div>
  )
}

export default UserProfileDropdown