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

const NewestPrompts = () => {
    const items = [
        {
            type: "🎨 DALL·E",
            image: "/images/newestprompts/1.webp",
            info: "Whimsical Gnomes In Hilarious Situations",
            price: "3.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/newestprompts/2.webp",
            info: "Playful Line Doodles generated by midjourney",
            price: "3.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/newestprompts/3.webp",
            info: "Folkloric Watercolor Illustrations generated by midjourney",
            price: "3.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/4.webp",
            info: "Perfect Your Prompts",
            price: "3.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/newestprompts/5.webp",
            info: "Whimsical Gnomes In Hilarious Situations",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/newestprompts/6.webp",
            info: "Playful Line Doodles generated by midjourney",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/newestprompts/7.webp",
            info: "Folkloric Watercolor Illustrations generated by midjourney",
            price: "2.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/8.webp",
            info: "Perfect Your Prompts",
            price: "1.99"
        },
        {
            type: "🎨 DALL·E",
            image: "/images/newestprompts/9.webp",
            info: "Whimsical Gnomes In Hilarious Situations",
            price: "1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/10.webp",
            info: "Playful Line Doodles generated by midjourney",
            price: "1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/11.webp",
            info: "Folkloric Watercolor Illustrations generated by midjourney",
            price: "1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/12.webp",
            info: "Perfect Your Prompts",
            price: "1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/13.webp",
            info: "Whimsical Gnomes In Hilarious Situations",
            price: "2.99"
        },
        {
            type: "⛵ Midjourney",
            image: "/images/newestprompts/14.webp",
            info: "Playful Line Doodles generated by midjourney",
            price: "2.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/15.webp",
            info: "Folkloric Watercolor Illustrations generated by midjourney",
            price: "2.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/newestprompts/16.webp",
            info: "Perfect Your Prompts",
            price: "3.99"
        },

    ]
    return (
        <div>
            <SwiperCommon items={items} mainTitle="Newest Prompts" />
        </div>
    );
}
export default NewestPrompts;