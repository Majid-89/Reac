import React from 'react'

function Pagescroller() {
    return (
        <div>
            <div className="fixed mx-auto max-w-screen-xl bottom-6 right-6 cursor-pointer bg-green-950 p-3 z-50 rounded-2xl" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}>
                <BiUpArrowCircle className='text-2xl text-white' />
            </div>
        </div>
    )
}

export default Pagescroller
