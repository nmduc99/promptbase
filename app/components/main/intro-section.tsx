import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import { FeaturedItem } from './featured-item'

export const IntroSection = () => {
    const items = [
        {
            type: "🎨 DALL·E",
            image: "/images/intro1.webp",
            info: "Whimsical Gnomes In Hilarious Situations",
            price: ""
        },
        {
            type: "⛵ Midjourney",
            image: "/images/intro2.webp",
            info: "Playful Line Doodles generated by midjourney",
            price: ""
        },
        {
            type: "⛵ Midjourney",
            image: "/images/intro3.webp",
            info: "Folkloric Watercolor Illustrations generated by midjourney",
            price: ""
        },
        {
            type: "🤖 GPT",
            image: "/images/intro4.webp",
            info: "Perfect Your Prompts",
            price: ""
        },

    ]
    const featured = [
        {
            logo: "/logo/tc_logo2.png",
            href: "https://techcrunch.com/2022/07/29/a-startup-is-charging-1-99-for-strings-of-text-to-feed-to-dall-e-2/"
        },
        {
            logo: "/logo/verge_logo.svg",
            href: "https://www.theverge.com/2022/9/2/23326868/dalle-midjourney-ai-promptbase-prompt-market-sales-artist-interview"
        },
        {
            logo: "/logo/wired_logo.png",
            href: "https://www.wired.com/story/picture-limitless-creativity-ai-image-generators/"
        },
        {
            logo: "/logo/fast_company_logo.png",
            href: "https://www.fastcompany.com/90825418/promptbase-generative-ai-prompt-marketplace"
        },
        {
            logo: "/logo/ft_logo.png",
            href: "https://www.ft.com/content/0deda1e7-4fbf-46bc-8eee-c2049d783259"
        },
        {
            logo: "/logo/atlantic_logo.svg",
            href: "https://www.theatlantic.com/technology/archive/2023/02/openai-text-models-google-search-engine-bard-chatbot-chatgpt-prompt-writing/672991/"
        },
        {
            logo: "/logo/yahoo_finance_logo.png",
            href: "https://finance.yahoo.com/news/artificial-intelligence-permeating-business-last-194727400.html?guccounter=1"
        },
        {
            logo: "/logo/wsj_logo.png",
            href: "https://www.wsj.com/articles/working-with-ai-review-learning-to-love-the-machine-11664135970"
        }
    ]
    return (
        <section className='px-12 py-16 max-w-7xl mx-auto'>
            {/* site-wrapper */}
            <div className="flex text-left text-white">
                {/* two-col hero */}
                <div className="pr-8 w-1/2 text-left">
                    {/* left-col hero-left */}
                    <h1 className="text-4xl">
                        <span className='gradient-text'>Midjourney, ChatGPT, DALL·E, Stable Diffusion & more</span>
                        <br />
                        <a>Prompt Marketplace</a>
                    </h1>
                    <div className=' text-lg mb-8 opacity-85'>
                        Search 100,000+ top AI prompts. Produce better outputs, save on time & API costs, sell your own prompts.
                    </div>
                    <div className='mt-4'>
                        <Button color="default" className='mr-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' variant="shadow">
                            {/* action-button buy-hero */}
                            Find a prompt
                        </Button>
                        <Button className="text-white" variant="bordered">
                            {/* action-button sell-hero outline */}
                            Sell a prompt
                        </Button>
                    </div>

                </div>
                <div className='w-1/2 text-center'>
                    {/* right-col hide-mobile */}
                    <div className='grid grid-cols-2 gap-4 text-white'>
                        {items.map((item, index) => {
                            return (
                                <FeaturedItem key={index} item={item} />
                            )
                        })}
                    </div>
                    <div className='opacity-50 text-center'>
                        {/* featured-logo-section */}
                        <p className='text-base mb-4 mt-8'>
                            <i>Featured in</i>
                        </p>
                        <div className='flex justify-center'>
                            <div className='space-x-4'>
                                {featured.map((f, index) => {
                                    return (
                                        <a key={index} href={f.href}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={f.logo} alt='Logo in Featured' className='inline h-4 mr-2' style={{ filter: 'invert(1)' }}></img>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
