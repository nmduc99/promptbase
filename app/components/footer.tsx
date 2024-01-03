import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="bg-custom-color text-white text-center  py-12 border-t-1 border-solid border-gray-900 ">
            <p>© PromptBase 2023</p>
            <div className="text-xs">
                <a className="inline-block m-2 mr-8">FAQ</a>
                <a className="inline-block m-2 mr-8">Contact</a>
                <a className="inline-block m-2 mr-8">Changelog</a>
                <a className="inline-block m-2 mr-8">Blog</a>
                <a className="inline-block m-2 mr-8">Privacy</a>
                <a className="inline-block m-2 mr-8">Terms</a>
                <a className="inline-block m-2 mr-8">Leaderboard</a>
            </div>
            <div className="mt-4 flex items-center justify-center w-full">
                {/* social-links */}
                <a>
                    <Image src="/instagram.svg"
                        className="h-6 w-6 mr-2 relative filter brightness-0 invert"
                        height={30}
                        width={40}
                        alt='logos'></Image>
                </a>
                <a>
                    <Image src="/threads.svg"
                        className="h-6 w-6 mr-2 relative filter brightness-0 invert"
                        height={40}
                        width={40}
                        alt='logos'></Image>
                </a>
                <a>
                    <Image src="/x.png"
                        className="h-6 w-6 mr-2 relative filter brightness-0 invert"
                        height={40}
                        width={40}
                        alt='logos'></Image>
                </a>
            </div>
            <div className="flex m-4 space-x-8 justify-center text-14">
                {/* best-links */}
                <div className="mr-8 text-left">
                    <div className="text-uppercase mb-2 font-semibold opacity-85 text-sm">CATEGORIES</div>
                    <div className="text-inherit underline-inherit">
                        <div>
                            <a href="">Art & Illustrations</a>
                        </div>
                        <div>
                            <a href="">Logos & Icons</a>
                        </div>
                        <div>
                            <a href="">Graphics & Design</a>
                        </div>
                        <div>
                            <a href="">Productivity & Writing</a>
                        </div>
                        <div>
                            <a href="">Marketing & Business</a>
                        </div>
                        <div>
                            <a href="">Photography</a>
                        </div>
                        <div>
                            <a href="">Games & 3D</a>
                        </div>
                        <div>
                            <a href="">Sitemap</a>
                        </div>
                    </div>

                </div>
                <div className="mr-8 text-left">
                    <div className="text-uppercase mb-2 font-semibold opacity-85 text-sm">MODELS</div>
                    <div className="text-inherit underline-inherit">
                        <div>
                            <a href="">Image</a>
                        </div>
                        <div>
                            <a href="">Text</a>
                        </div>
                        <div>
                            <a href="">Midjourney</a>
                        </div>
                        <div>
                            <a href="">DALL·E</a>
                        </div>
                        <div>
                            <a href="">Stable Diffusion</a>
                        </div>
                        <div>
                            <a href="">GPT</a>
                        </div>
                        <div>
                            <a href="">Leonardo Ai</a>
                        </div>
                        <div>
                            <a href="">DALL·E 3</a>
                        </div>
                        <div>
                            <a href="">Llama 2</a>
                        </div><div>
                            <a href="">Stable Diffusion XL1.0</a>
                        </div>
                        <div>
                            <a href="">Midjourney V6</a>
                        </div>
                        <div>
                            <a href="">Midjourney V5.2</a>
                        </div>
                        <div>
                            <a href="">Midjourney V5.1</a>
                        </div>
                        <div>
                            <a href="">Midjourney V5</a>
                        </div>
                        <div>
                            <a href="">Midjourney Niji</a>
                        </div>
                        <div>
                            <a href="">ChatGPT</a>
                        </div>
                        <div>
                            <a href="">GPT-4</a>
                        </div>
                        <div>
                            <a href="">GPT-3</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}