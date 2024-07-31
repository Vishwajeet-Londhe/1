import React from 'react'

function Card (){
return(
        <div className= 'w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            <div className='w-52 bg-zinc-100 rounded-lg overflow-hidden'>
                <div className='w-full h-32 bg-zinc-300'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>amazon</h2>
                    <p className='text-xs mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, libero.</p>
                </div>

            </div>
            <div className='w-52 bg-zinc-100 rounded-lg overflow-hidden'>
                <div className='w-full h-32 bg-zinc-300'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>amazon</h2>
                    <p className='text-xs mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, libero.</p>
                </div>

            </div>
        </div>
    )
}
export default Card