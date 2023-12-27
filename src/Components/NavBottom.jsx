import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";




function NavBottom() {
    const [toggle, settoggle] = useState(true)
    return (
        <>
            <div className=" relative z-40  bg-white shadow-xl border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <nav className="container mx-auto relative  bg-white py-8 ">
                    {
                        !toggle ? <MdCancel onClick={() => settoggle(!toggle)} className='block md:hidden absolute right-2 top-5  text-3xl' /> :
                            <GiHamburgerMenu onClick={() => settoggle(!toggle)} className='block md:hidden absolute right-2 top-5  text-3xl' />

                    }
                    <div className="hidden  md:flex md:w-[100%] lg:w-[70%] justify-around overflow-x-auto
                ">

                        <div className="group bg-yellow ">
                            <div className="flex justify-center rounded-lg items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown1</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex absolute left-0 mt-4 w-full">
                                <ul className="py-2  bg-blue-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group ">
                            <div className="flex justify-center items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown2</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex absolute w-full left-0 ">
                                <ul className="py-2  bg-orange-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group ">
                            <div className="flex justify-center items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown3</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex absolute w-full left-0">
                                <ul className="py-2  bg-green-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group ">
                            <div className="flex justify-center items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown4</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex absolute w-full left-0">
                                <ul className="py-2  bg-gray-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group ">
                            <div className="flex justify-center items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown5</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex absolute w-full left-0">
                                <ul className="py-2  bg-yellow-300 w-full text-sm group-hover:block transition-all duration-300 hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>




                    {/*Mobile-View */}
                    <div className={`h-screen overflow-y-auto absolute right-0 transition-all duration-300 ${toggle ? 'w-[0]' : 'w-[52]'}  top-16 md:hidden flex-col bg-gray-100 sm:h w-52 text-center flex  md:w-[70%]  overflow-x-auto
                `}>
                        {/* <div className=" py-4 items-center ">
                            <div className='flex justify-center gap-1' onClick={handleDropdownToggle}>
                                <h1 className="text-1xl font-semibold">DropDown1</h1>
                                <IoMdArrowDropdown className="text-xl" />
                            </div>

                            {isOpen && (
                                <ul className="py-4  bg-slate-500 text-sm text-gray-700 dark:text-gray-400">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Earnings
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div> */}
                        <div className="group ">
                            <div className="flex justify-center py-4 items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown1</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex  flex-col w-full">
                                <ul className="py-2  bg-orange-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group ">
                            <div className="flex justify-center py-4 items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown2</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex  flex-col w-full">
                                <ul className="py-2  bg-orange-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="group ">
                            <div className="flex justify-center py-4 items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown3</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex flex-col w-full ">
                                <ul className="py-2  bg-green-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group ">
                            <div className="flex justify-center py-4 items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown4</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex flex-col w-full ">
                                <ul className="py-2  bg-gray-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group ">
                            <div className="flex justify-center py-4 items-center gap-1">
                                <h1 className='text-1xl font-semibold'>DropDown5</h1>
                                <IoMdArrowDropdown className='text-xl' />
                            </div>
                            <div className="flex flex-col w-full">
                                <ul className="py-2  bg-yellow-300 w-full text-sm group-hover:block transition-all duration-300 hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <ul className="py-2  bg-slate-500 w-full text-sm group-hover:block hidden text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>

                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li className="w-full">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBottom
