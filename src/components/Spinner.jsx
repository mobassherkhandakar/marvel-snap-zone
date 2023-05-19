import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <div className='w-20 h-20 border-8 border-dashed rounded-full animate-spin mt-5 border-red-700-400'></div>
    </div>
  )
}

export default Spinner