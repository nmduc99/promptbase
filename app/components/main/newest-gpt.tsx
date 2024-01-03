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

const NewestGpt = () => {
    const items = [
        {
            type: "🤖 GPT",
            image: "/images/gpt/1.webp",
            info: "Knowledge Mastery Blueprint",
            price: "$1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/2.webp",
            info: "Future Predictions D",
            price: "$1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/3.webp",
            info: "Strategic Ventures Blueprint",
            price: "$1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/4.webp",
            info: "How To Have More Discipline",
            price: "$3.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/5.webp",
            info: "Quick Fitness Wins Workouts For",
            price: "$3.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/6.webp",
            info: "Transform Your Food Relationship",
            price: "$3.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/7.webp",
            info: "Notion Selfcare Template Generator",
            price: "$2.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/8.webp",
            info: "Body Language Mastery Communication Ski",
            price: "$2.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/9.webp",
            info: "Financial Advisor",
            price: "$2.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/10.webp",
            info: "Corporate Responsibility",
            price: "$3.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/11.webp",
            info: "Active Listening Mastery Better Communi",
            price: "$3.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/12.webp",
            info: "Personal LinkedIntwitter Growth Hacker",
            price: "$3.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/13.webp",
            info: "YouTube Complete Bundle All-in-one",
            price: "$1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/14.webp",
            info: "Personalized Learning Diverse Style",
            price: "$1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/15.webp",
            info: "Content Calendar For Social Media",
            price: "$1.99"
        },
        {
            type: "🤖 GPT",
            image: "/images/gpt/16.webp",
            info: "Personal Finance Advisor",
            price: "$2.99"
        },

    ]
    return (
        <div>
            <SwiperCommon items={items} mainTitle="Newest Gpt" />
        </div>
    );
}
export default NewestGpt;