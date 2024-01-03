/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@nextui-org/react";
import Image from "next/image";

const SectionImage = () => {
    return (
        <div className="mx-auto max-w-7xl px-16 py-12">
            <div className="flex">
                <div className=" text-white">
                    {/* left */}
                    <h2 className="pr-8 text-left text-2xl mb-3">
                        <span className="gradient-text mr-1">
                            Generate images
                        </span>
                        directly in PromptBase
                    </h2>
                    <p className="text-xs mb-4 mt-0">Start prompt engineering instantly within PromptBase using Stable Diffusion.</p>
                    <p className="text-xs mb-4 mt-0">Craft prompts and sell them on the marketplace.</p>
                    <p className="text-xs mb-4 mt-0">Get 5 free generation credits every day.</p>
                    <div>
                        <Button color="default" className='mr-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' variant="shadow">
                            Generate images
                        </Button>
                    </div>
                </div>
                <div className="w-1/2">
                    {/* right */}
                    <Image src="/images/generate.webp" height={400} width={400} alt="genrate img" className="border-2 border-white rounded-md w-full">

                    </Image>
                </div>
            </div>
        </div>
    )
};

export default SectionImage;