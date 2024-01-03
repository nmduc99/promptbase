/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@nextui-org/react";

const SectionYoutube = () => {
    return (
        <div className="mx-auto max-w-7xl px-16 py-32">
            <div className="flex">
                <div className=" text-white pr-8 w-full text-left">
                    {/* left */}
                    <h2 className="text-2xl mb-2">
                        Earn from your Prompt Engineering skills
                    </h2>
                    <p className="text-xs mb-4 mt-0">PromptBase is an early marketplace for Midjourney, ChatGPT, DALL·E, Stable Diffusion, LLama and Leonardo Ai Prompts.</p>
                    <p className="text-xs mb-4 mt-0">Sell your prompts on PromptBase and earn from your prompt crafting skills.</p>
                    <p className="text-xs mb-4 mt-0">Upload your prompt, connect with Stripe, and become a seller in just 2 minutes.</p>
                    <div>
                        <Button color="default" className='mr-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' variant="shadow">
                            Sell a prompt
                        </Button>
                    </div>
                </div>
                <div className="w-full wrapper-youtube">
                    {/* right */}
                    <div className="relative w-full h-full top-0 left-0 bg-center bg-no-repeat transition-opacity duration-250 ease-in-out bg-cover">
                        <iframe src="https://www.youtube.com/embed/QORw7FJ5lho" className="relative w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SectionYoutube;