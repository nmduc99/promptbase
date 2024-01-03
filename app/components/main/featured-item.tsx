import React from 'react'
import { SwiperCommonType } from './type/swiper-common-type'

interface IProps {
    item: SwiperCommonType
    height?: string
    width?: string
}

export const FeaturedItem = ({ item, height = '40', width = '60' }: IProps) => {

    return (
        <div className={`h-${height} hover:-translate-y-2 transition-swiper relative rounded-md overflow-hidden w-full flex items-center justify-center cursor-pointer shadow-lg`}>
            <div className="absolute z-1 top-2 left-2 opacity-85 bg-gray-900  px-2 py-1 text-xs rounded-md">
                <span className="box-border">
                    {item.type}
                </span>
            </div>
            <div className={`w-${width}`}>
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src={item.image} width="100%" height="100%" />
            </div>
            <div className='absolute flex z-10 bottom-0 left-0 p-2 bg-black text-white w-full opacity-85 text-xs mb-0'>
                <div className='w-full'>
                    {item.info}
                </div>
                <div>
                    {item.price}
                </div>
            </div>
        </div>
    )
}
