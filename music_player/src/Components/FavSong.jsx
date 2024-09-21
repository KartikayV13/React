import React from 'react'

const FavSong = ({name , image , id}) => {
  return (
    <div className='min-w[180px] shrink-0 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="" className='rounded h-[150px] w-[150px]' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
    </div>
  )
}

export default FavSong