import React from 'react'
import HomeHeader from './HomeHeader'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import RightBar from './RightBar'

const Layout1 = () => {
  return (
    <div className=''>
        <HomeHeader />
           <div className=' flex gap-3 mt-8 w-[90%] mx-auto'>
            <Sidebar />
             <Outlet />
             <RightBar />
           </div>
    </div>
  )
}

export default Layout1