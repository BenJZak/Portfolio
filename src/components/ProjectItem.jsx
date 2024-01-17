import React from 'react'
import { Link } from 'react-router-dom'
const ProjectItem = ({ img, title }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'></p>
        <h4 className='flex flex-col items-center justify-center'>
          <button className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110'>More Info</button>
        </h4>
      </div>
    </div>
  )
}

export default ProjectItem
