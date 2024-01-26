import React from 'react'

const SearchInput = () => {
  return (
    <div>
        <form className="flex items-center ">   
       
            <div className="relative w-full items-center ">
                <div className="absolute inset-y-0 left-4 flex items-center  pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
        </svg>
            
                </div>
                <input type="text" id="search" className="flex h-12 w-[230px] lg:w-[349px] pl-10 text-[#A3A3A3]  rounded-3xl bg-[#FFF] dark:bg-[#0D0D0D] border  border-[#DADDDD] dark:border-[#2E3232]" placeholder="Search..." />
            </div>
       
        </form>
    </div>
  )
}

export default SearchInput