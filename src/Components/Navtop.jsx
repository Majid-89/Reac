import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Navtop() {
    return (
        <>
            <div id='top' className='bg-[#887735] text-white '>
                <div className="flex justify-between items-center container mx-auto  py-2 ">
                    <div className="icons hidden cursor-pointer md:flex gap-3">
                        <GrFacebookOption />
                        <IoLogoTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                    <div className="">
                        <ul className='flex gap-1 text-sm md:gap-4 cursor-pointer'>
                            <li className='mr-10 hidden md:block'><FaLocationDot className='md:inline md:text-xl ' /> Find a Store</li>
                            <li>Products</li>
                            <li className='px-2 border-l-2'>Contact Us</li>
                            <li className='px-2 border-l-2'>GBP</li>
                            <li>ENGLISH/ARABIC</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navtop
