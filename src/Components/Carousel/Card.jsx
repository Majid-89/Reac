import React from 'react'
import { CardData } from './CardData'

function Card() {
    return (
        <>
            <div className="container relative w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
                <div className='hidden lg:block absolute left-[50%] transform -translate-x-1/2 -translate-y-6 bottom-7 h-96 w-[90vw]  bg-slate-200' />
                {CardData.map((d) => (
                    <a key={d.id} href="#" className="group shadow-xl h-96 relative  bg-black">
                        <img
                            alt=""
                            src={d.img}
                            className="absolute inset-0 w-full h-full object-contain  transition-all  group-hover:scale-90"
                        />
                        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                            <h1 className="flex justify-center items-center text-xl font-bold text-white sm:text-2xl">{d.title}</h1>
                        </div>
                        <div className="absolute left-[50%] transform -translate-x-1/2 -translate-y-1/2 bottom-7">
                            <button className='text-white  p-3 border transition-all duration-300 hover:bg-[#887735] hover:border-[#887735] whitespace-nowrap '>{d.btn}</button>
                        </div>
                    </a>
                )
                )}
            </div>
        </>
    )
}

export default Card
