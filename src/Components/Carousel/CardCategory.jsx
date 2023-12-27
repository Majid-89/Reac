import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./slider.css"
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { productData, cardColors } from './CardData'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


function CardCategory() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        pauseOnHover: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <MdSkipNext />,
        prevArrow: <MdSkipPrevious />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [data, setData] = useState(productData.products)
    const [filterValue, setFilterValue] = useState("All")
    const filterResult = (cartItem) => {
        setFilterValue(cartItem)
        const result = productData.products.filter((curData) => {
            return (curData.category === cartItem)
        })
        setData(result)

    }
    return (
        <>
            <div className="container py-8 mx-auto">

                <div className="header-section">
                    <h1 className='text-3xl uppercase text-[#887735] font-bold px-3 py-6 text-center'>Our Favourites</h1>
                    <div className="flex flex-wrap gap-3 justify-center space-x-5 my-6 cursor-pointer">
                        <button className={`text-lg py-2 px-5 rounded-lg text-white border cursor-pointer ${filterValue === "All" ? 'bg-blue-500' : 'bg-[#887735]'}`} onClick={() => {
                            setData(productData.products)
                            setFilterValue("All")
                        }
                        }>All</button>
                        <button className={`text-lg py-2 px-5 rounded-lg bg-[#887735] text-white border cursor-pointer ${filterValue === "smartphones" && 'bg-blue-500'}`} onClick={() => filterResult('smartphones')}>Smartphones</button>
                        <button className={` text-lg py-2 px-5 rounded-lg bg-[#887735] text-white border cursor-pointer ${filterValue === "laptops" && 'bg-blue-500'}`} onClick={() => filterResult('laptops')}>Laptop</button>
                        <button className={` text-lg py-2 px-5 rounded-lg bg-[#887735] text-white border cursor-pointer ${filterValue === "fragrances" && 'bg-blue-500'}`} onClick={() => filterResult('fragrances')}>Fragrances</button>
                    </div>
                </div>
                <div className="">
                    <Slider {...settings}>
                        {data.map((d) => {
                            return (
                                <Link key={d.id} to="/productdetails">
                                    <div className="p-4 mt-10  mx-auto overflow-hidden rounded-lg">
                                        <div className="text-center shadow-md rounded-lg">
                                            <img className='h-52 md:h-72 shadow-sm rounded-xl w-full object-cover ' src={d.images[0]} alt="" />
                                            <div className="flex gap-3 mt-8 ml-8 ">
                                                {
                                                    cardColors.map((d) => {
                                                        return (
                                                            <div key={d.id} className=''>
                                                                <div className=' w-4 h-4 rounded-full' style={{ background: d.color }}></div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="mt-1 p-6 text-start ">
                                                <h1 className='truncate font-semibold text-gray-700 capitalize text-xl pb-2'>{d.title}</h1>
                                                <p className='truncate font-thin'>{d.description}</p>
                                            </div>
                                            <div className="flex justify-between text-start px-4 pb-4">
                                                <button className='font-bold border-2 px-1 text-green-500 border-green-500 rounded-lg '>{d.price}$</button>
                                                <div className="flex justify-center items-center gap-1">
                                                    <FaStar className='text-xl text-[#fbbf24]    ' />
                                                    <p className='text-gray-500 font-semibold'>{d.rating} ({Math.ceil(d.price / d.rating)} reviews)</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })}
                    </Slider >
                </div>

            </div >
        </>
    )
}

export default CardCategory
