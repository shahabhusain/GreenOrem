import React from 'react'
import welcome from '../../../assets/1.png'
const Oppertunities = () => {
  return (
    <div>
           <div className=' flex items-center justify-between w-[90%] mx-auto'>
                  <div className=' w-[50%]'>
                    <h2 className=' text-[#00973F] text-[40px] font-[900]'>Greenorum Oppertunities </h2>
                    <p className=' text-[32px] font-[500]'>This platform will also function as a display for a wide range of innovations, offering investors the chance to back and invest in numerous environmentally sustainable projects. </p>
                </div>
                <img className=' w-[40%]' src={welcome} alt="" />
                </div>
    </div>
  )
}

export default Oppertunities