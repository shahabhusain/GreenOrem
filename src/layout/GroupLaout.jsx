import HomeHeader from './HomeHeader'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import React from 'react'

const GroupLaout = () => {
  return (
    <div className='w-full'>
      <HomeHeader />
      <div className='max-w-[1555px] flex gap-3 mt-8 w-[90%] mx-auto'>
        {/* Sidebar - Fixed */}
        <div className=" h-[calc(100vh-4rem)] sticky top-20">
          <Sidebar />
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 h-[calc(100vh-4rem)] scrollbar-custom w-full overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default GroupLaout
