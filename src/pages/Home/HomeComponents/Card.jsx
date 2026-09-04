import React from 'react'

const Card = ({icon, children}) => {
  return (
    <div className='w-full md:w-[260px] min-h-[350px] relative flex items-center justify-center rounded-br-[75px] text-white bg-zinc-950 shadow-lg border border-primary'>
        <div className='absolute top-[calc(0%-33px)] left-[calc(0%+20px)] size-[66px] rounded-[6px] bg-primary-light flex items-center justify-center'>
            <img src={icon} alt="" className='w-[42px] h-[42px] invert' />
        </div>
        <div className='px-[20px]'>
            {children}
        </div>
    </div>
  )
}

export default Card