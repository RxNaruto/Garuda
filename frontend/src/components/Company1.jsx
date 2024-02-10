import React from 'react'

const Company1 = ({label}) => {
  return (
    <div className='flex justify-center top-1/2 pt-40'>

    <div className=' w-80 bg-white h-9 rounded-lg flex justify-center items-center'>
        <div className=' font-semibold text-xl  text-red '>
            {label}
        </div>
    </div>
    </div>
  )
}

export default Company1