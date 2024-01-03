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
import { SwiperCommonType } from "./type/swiper-common-type";

interface IProps {
    items: SwiperCommonType[]
    mainTitle: string
}

const SwiperCommon = ({ items, mainTitle }: IProps) => {

    return (
        <div className="swiper-common">
            <h2 className="text-white mb-2">{mainTitle}</h2>
            <div className="line mt-0 mb-4 bg-white h-0.5 opacity-50"></div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper text-white"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}> <FeaturedItem item={item} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperCommon;