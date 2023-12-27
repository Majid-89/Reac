import React from 'react'
import Navtop from './Navtop'
import Logo from '../assets/LOGO.jpg'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import NavBottom from './NavBottom';
import { Link } from 'react-router-dom';






function Navbar() {
    return (
        <div>
            <Navtop />
            <div className="container  relative mx-auto flex justify-between flex-wrap py-4 items-center">
                <div className="hidden md:block logo w-32 cursor-pointer">
                    <img src={Logo} alt="" />
                </div>
                <div className="search-box hidden lg:block basis-1/3 cursor-pointer">
                    <div className="mx-auto border-red-800 ">

                        <input type="text" className='p-2 px-8 w-[70%] border-none  rounded-l-lg' placeholder='Search a product name or code' />
                        <button className='bg-[#887735] p-2 text-white font-normal rounded'>SEARCH</button>
                        <FaSearch className='mt-[-28px] font-extrabolder ml-1' />
                    </div>
                </div>
                <div className="">
                    <div className="hidden md:flex items-center gap-1 ">
                        <FaMobileAlt className='inline text-4xl' />
                        <div className="font-bold">
                            <span className='text-xs'>Order now!</span>
                            <p className='text-xs '>+97137680300</p>
                        </div>
                    </div>
                </div>
                <div className="icon-box  mr-3 md:mr-0 text-2xl flex self-end cursor-pointer  md:text-3xl gap-5">
                    <Link to="/signup"><FaRegUser /></Link>

                    <FaRegHeart />
                    <div className='w-[1px]  bg-black' />
                    <FaLock />
                </div>
            </div>
            <NavBottom />
        </div>
    )
}

export default Navbar
