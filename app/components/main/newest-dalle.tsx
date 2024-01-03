'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { FeaturedItem } from "./featured-item";
import SwiperCommon from "./swiper-common";

const NewestDalle = () => {
    const items = [
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/1.webp",
            info: "Christmas Lights",
            price: "$3.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/2.webp",
            info: "Porcelain",
            price: "$2.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/3.webp",
            info: "Typography Cute Greeting Card Designs",
            price: "$2.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/4.webp",
            info: "Realistic Mocktails",
            price: "$1.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/5.webp",
            info: "Sweet Valentine Illustrations",
            price: "$1.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/6.webp",
            info: "Modern Corporate Memphis Letter Logos",
            price: "$3.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/7.webp",
            info: "Easter Illustrations",
            price: "$3.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/8.webp",
            info: "Blue Print Designs",
            price: "$4.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/9.webp",
            info: "Adorable 3D Characters",
            price: "$4.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/10.webp",
            info: "Future City Vistas",
            price: "$6.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/11.webp",
            info: "Top Dog Fighters",
            price: "$6.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/12.webp",
            info: "Christmas Digital Paper Background Images",
            price: "$5.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/13.webp",
            info: "Christmas Greeting Cards Illustrations",
            price: "$5.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/14.webp",
            info: "Mothers Day Illustrations In Watercolors",
            price: "$2.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/15.webp",
            info: "Frosty Cubes Art",
            price: "$2.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/dalle/16.webp",
            info: "Cute Anthropomorphic Animals",
            price: "$1.99"
        },
    ]
    return (
        <div>
            <SwiperCommon items={items} mainTitle="Newest Dalle" />
        </div>
    );
}
export default NewestDalle;