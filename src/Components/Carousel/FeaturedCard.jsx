import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./slider.css"
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import Card from './Card';
import { featuredCardData } from './CardData'

function FeaturedCard() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        pauseOnHover: true,
        speed: 10000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <MdSkipNext />,
        prevArrow: <MdSkipPrevious />
        , responsive: [
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
    return (
        <>
            <div className="container py-10  mx-auto rounded-box">
                <h1 className='text-3xl uppercase text-[#887735] font-bold px-3 py-6 text-center'>Featured Brands</h1>
                <Slider {...settings}>
                    {
                        featuredCardData.map((d) => {
                            return (
                                <div key={d.id} className=" shadow-sm carousel-item px-3 mx-auto ">
                                    <img className='w-full' src={d.img} alt="Pizza" />
                                </div>
                            )
                        })
                    }
                </Slider >
            </div>
            <Card />

        </>
    )
}

export default FeaturedCard
