import React from 'react'
import {fav_Songs } from "../assets/assests"

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between text-white px-5">
        <div className="hidden lg:flex items-center gap-4">
            <img src={fav_Songs [0].image} alt="" className='w-12' />
            <div>
                <p>{fav_Songs [0].name}</p>

            </div>
        </div>
    </div>
  )
}

export default Player