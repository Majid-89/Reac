import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

function Footer() {
    return (
        <>

            <footer className="bg-[#887735]  text-white">
                <div className="mx-auto container px-4 py-6 sm:px-6 lg:px-8">

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-7 lg:grid-cols-6">

                        <div className="">
                            <p className="font-bold text-xl ">Customer Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Security & Payments </a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Delivery & Returns</a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Online Finance Guide</a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Payl8r Finance Calculator</a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Price Match Endeavour</a>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <p className="font-bold text-xl">Legal Info</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Cookies Policy</a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Returns Policy</a>
                                </li>
                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Terms & Conditions</a>
                                </li>
                                <li className='pb-8'>
                                    <a href="#" className="  transition hover:text-red-500">Data Processing</a>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <p className="font-bold text-xl">Company Info</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Contact Us</a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Find Us </a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> About Us </a>
                                </li>
                                <li>
                                    <a href="#" className=" transition hover:text-red-500">Trade Enquiries</a>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <p className="font-bold text-2xl">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Accessibility </a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Returns Policy </a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Refund Policy </a>
                                </li>

                                <li>
                                    <a href="#" className=" transition hover:text-red-500"> Hiring Statistics </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2">
                            <h1 className="font-bold md:font-extrabold text-2xl">BE THE FIRST TO KNOW</h1>
                            <p className='text-xl py-6'>Join for news, updates, special offers & insights: </p>
                            <label
                                htmlFor="UserEmail"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-b-2 focus-within:border-white"
                            >
                                <input
                                    type="email"
                                    id="UserEmail"
                                    placeholder="Email"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />
                                <span
                                    className="absolute italic start-0 top-2 -translate-y-1/2 text-xl text-bold text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2"
                                >
                                    Email
                                </span>
                                <FaLongArrowAltRight className='absolute top-5 right-0' />
                            </label>
                        </div>
                    </div>
                    <hr className='w-full' />


                    <div className="py-7 flex w-[90%] mx-auto justify-between md:justify-end gap-4 md:gap-32 lg:col-span-5 ">
                        <div className="flex  items-center gap-1">
                            <FaMobileAlt className='inline text-3xl md:text-4xl' />
                            <div className="font-bold">
                                <span className='text-xs'>Order now!</span>
                                <p className='text-xs '>+97137680300</p>
                            </div>
                        </div>
                        <ul className="flex gap-4 justify-start items-center text-xl md:pr-9 md:text-2xl ">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className=" transition hover:text-red-500"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <FaFacebookF />

                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className=" transition hover:text-red-500"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className=" transition hover:text-red-500"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className=" transition hover:text-red-500"
                                >
                                    <span className="sr-only">Dribbble</span>

                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-white px-3 py-8">
                        <div className="flex gap-4">
                            <p className="text-xs " >Copyright © 2007 - 2023 Sportsman Gun Centre</p>
                            <div className='w-[1px] bg-white' />
                            <p className="text-xs ">Developed By Softech Square Software Solutions</p>
                        </div>
                    </div>

                </div>

            </footer >
        </>
    )
}

export default Footer
