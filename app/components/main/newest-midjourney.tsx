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

const NewestMidjourney = () => {
    const items = [
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/1.webp",
            info: "Fast Foods With Text",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/2.webp",
            info: "Living On Alien Planets",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/3.webp",
            info: "Surreal Fiber Dreams",
            price: "3.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/4.webp",
            info: "Asian Cuisine Pictures",
            price: "3.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/5.webp",
            info: "Watercolor Cute Angels Illustrations",
            price: "1.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/6.webp",
            info: "Jungle Animals",
            price: "1.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/7.webp",
            info: "Moody Illustrations Patterns",
            price: "1.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/8.webp",
            info: "Asian Cuisine Pictures",
            price: "3.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/5.webp",
            info: "Watercolor Cute Angels Illustrations",
            price: "3.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/6.webp",
            info: "Jungle Animals",
            price: "4.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/7.webp",
            info: "Moody Illustrations Patterns",
            price: "4.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/9.webp",
            info: "Attentiongrabbing Ads",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/10.webp",
            info: "Adorable Hand-drawn Characters",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/11.webp",
            info: "Wisdom In Portraits Of The World",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/12.webp",
            info: "16bit Pixel Art",
            price: "3.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/midjourney/13.webp",
            info: "Dark Terror Comic Illustrations V6",
            price: "3.99"
        },

    ]
    return (
        <div>
            <SwiperCommon items={items} mainTitle="Newest Midjourney" />
        </div>
    );
}
export default NewestMidjourney;