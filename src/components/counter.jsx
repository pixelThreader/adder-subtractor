import React from 'react'

function Badge({props, resetThings}) {
  return (
    <div className='relative mb-3 h-60 w-full border border-slate-500 grid place-items-center rounded overflow-hidden'>
      <div className="flex">
        <div className="text-4xl me-2">Evaluation: </div>
        <div className="text-4xl text-green-300 font-bold">{props.score}</div>
      </div>
      <button onClick={resetThings} className='absolute bottom-0 left-0 flex mx-auto mt-16 text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 active:bg-slate-500 rounded-tr text-lg'>Reset</button>
    </div>
  )
}

export default Badge
