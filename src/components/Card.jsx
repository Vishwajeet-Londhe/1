import React from 'react'

function Card (){
    return(
        <div className= 'w-full h-screen bg-zinc-200'>
            <div className='px-3 py-4 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -transalte-y-[50%] rounded-lg overflow-hidden'>
                <div className='w-32 h-32 bg-zinc-300'></div>

            </div>
        </div>
    )
}
export default Card