import React, { useState } from 'react'

function FirstTask() {
    const message = [
        "Learn React man learn React",
        "Apply for React Jobs",
        "Apply for React Jobs",
        "Apply for React Jobs",
        "Leave your Dreams lifestyle",

    ]

    const [step, setStep] = useState(0)

    return (
        <>
            <div className="bg-gray-300 w-[90%] py-20 mx-auto ">
                <div className="upper-section w-[70%] mx-auto py-8 flex justify-between items-center">
                    {message.map((item, index) => (
                        <div className={`1 w-12 h-12 ${step >= index ? "bg-blue-500" : "bg-slate-400"} rounded-full flex  justify-center items-center font-bold  text-white`}>{index + 1}</div>
                    ))}
                </div>
                <div className="mid-section ">
                    <p className='text-xl  font-bold text-center py-8'>Step {step + 1}:{message[step]}  </p>
                </div>
                <div className="buttons mt-16 w-[70%] mx-auto flex justify-between">
                    <button className='px-5 py-2 font-semibold rounded-lg text-white text-xl bg-blue-600' onClick={() => { if (step > 0) { setStep(step - 1) } }}>Previous</button>
                    <button className='px-5 py-2 rounded-lg text-white font-semibold text-xl bg-blue-600' onClick={() => { if (step < message.length - 1) { setStep(step + 1) } }}>Next</button>
                </div>
            </div >
        </>
    )
}

export default FirstTask
