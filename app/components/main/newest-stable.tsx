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

const NewestStable = () => {
    const items = [
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/1.webp",
            info: "Boho Girls",
            price: "3.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/2.webp",
            info: "Patterns",
            price: "2.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/3.webp",
            info: "Disaster Epic Sketches",
            price: "1.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/4.webp",
            info: "Cherry Pink Rose Castles A Fairy Tale",
            price: "1.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/5.webp",
            info: "Nature",
            price: "2.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/6.webp",
            info: "Scenes",
            price: "2.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/7.webp",
            info: "Animals Wearing Armors",
            price: "3.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/8.webp",
            info: "Starry Night Style",
            price: "3.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/9.webp",
            info: "Fancy Feathers",
            price: "2.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/10.webp",
            info: "Flowers",
            price: "2.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/11.webp",
            info: "Dance Forms",
            price: "3.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/12.webp",
            info: "Impatient Sketch Pops Out",
            price: "3.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/13.webp",
            info: "Modern Detailed Tattoos Of Womens Faces",
            price: "1.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/14.webp",
            info: "Crystal Flower Figurine",
            price: "1.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/15.webp",
            info: "Floral Patterns",
            price: "2.99"
        },
        {
            type: "🌌 Stable Diff.",
            image: "/images/stable/16.webp",
            info: "Animal Patterns",
            price: "2.99"
        },


    ]
    return (
        <div>
            <SwiperCommon items={items} mainTitle="Newest Stable" />
        </div>
    );
}
export default NewestStable;