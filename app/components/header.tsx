import Image from "next/image"
import SearchIcon from "./icons/search"
import Link from "next/link"


export const Header = () => {
    const categories = [
        {
            title: "AI Models",
            icon: "/3d_outline.svg"
        },
        {
            title: "Art & Illustrations",
            icon: "/art_pallette_outline.svg"
        },
        {
            title: "Logos & Icons",
            icon: "/logos_icons_outline.svg"
        },
        {
            title: "Graphics & Design",
            icon: "/image_outline.svg"
        },
        {
            title: "Productivity & Writing",
            icon: "/draw_outline.svg"
        },
        {
            title: "Marketing & Business",
            icon: "/briefcase_outline.svg"
        },
        {
            title: "Photography",
            icon: "/camera_outline.svg"
        },
        {
            title: "Games & 3D",
            icon: "/controller_outline.svg"
        },
    ]
    return (
        <nav className="w-full shadow-lg z-10 border-b border-solid border-gray-700 bg-custom-color">
            <div className="container items-center justify-between w-full mx-auto pb-2">
                {/* main nav*/}
                <div className="flex space-x-3 items-center">
                    <div className="shrink-0 flex items-center ">
                        <Image src='/logo.webp'
                            className="h-6 w-6 mr-2 relative"
                            height={40}
                            width={40}
                            alt='logo' />
                        <span className="text-20 font-bold text-white">
                            PromptBase
                        </span>
                    </div>
                    {/* div search */}
                    <div className="w-full text-white">
                        <div className=" bg-input-color flex justify-between rounded-md px-2 h-8 items-center">
                            <input
                                type="text"
                                placeholder="Search Prompts"
                                className="bg-transparent w-full text-sm focus:outline-0"
                            />
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="shrink-0 flex items-center justify-evenly text-white text-14">
                        <ul className="shrink-0 flex items-center ">
                            <Link href="/marketplace" className="m-4">Marketplace</Link>
                            <Link href="/generate" className="m-4">Generate</Link>
                            <Link href="/hire" className="m-4">Hire</Link>
                            <Link href="/login" className="m-4">Login</Link>
                            <Link href="/sell" className="m-4">Sell</Link>
                        </ul>
                    </div>
                </div>

                {/* sub nav */}
                <div className="flex items-center text-xs justify-evenly">
                    <div className="flex items-center text-xs">
                        {categories.map((category, index) => (
                            <div key={index} className="flex items-center text-xs ">
                                <Image src={category.icon}
                                    className="h-6 w-6 mr-2 relative filter brightness-0 invert"
                                    height={40}
                                    width={40}
                                    alt='logos' />
                                <span className="text-white mr-6 text-xs"> {category.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav >
    )
}