import React from 'react'
import HomeHeader from './HomeHeader'
import { Outlet } from 'react-router-dom'

const VideoLayout = () => {
  return (
    <div>
        <HomeHeader />
        <Outlet />
    </div>
  )
}

export default VideoLayout