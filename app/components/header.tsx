import Image from "next/image"

export const Header = () => {
    return (
        <nav className="w-full shadow-md z-10 border-b border-solid border-gray-700 h-105 bg-customBackground">
            {/* <div className="flex items-center h-16 justify-between w-full px-8 py-2 md:py-4 max-w-1400 mx-auto ">
                <div className="flex items-center border-0 p-0 pl-0 cursor-pointer">
                    <img src='https://promptbase.com/assets/img/logo/logo_50_webp.webp' className="h-6 w-6 mr-2 relative"></img>
                    <span className="text-2xl font-bold text-white">
                        PromptBase
                    </span>
                </div>
                <div className="w-full h-8 relative mr-4">
                    <div className="flex w-full top-0 left-0 z-4 justify-center">
                        <input
                            type="text"
                            placeholder="Search Prompts"
                            className="rounded-l-md h-8 whitespace-no-wrap relative m-0 text-decoration-none overflow-hidden bg-transparent border-0 outline-none cursor-text p-2 antialiased text-white bg-gray-700 text-xs"
                        />
                        <div className="flex items-center justify-center h-8 rounded-r-lg w-12 p-0 opacity-100 transition duration-300 bg-gray-700">
                            <img src="https://promptbase.com/assets/icons/search.svg" className="w-6 h-6 filter invert" />
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    ...
                </div>
            </div> */}

            <div className="flex items-center h-16 justify-between w-full px-8 py-2 md:py-4 max-w-1400 mx-auto">
                {/* main nav*/}
                <div className="flex space-x-3 items-center">
                    <div className="shrink-0 flex items-center ">
                        <Image src='https://promptbase.com/assets/img/logo/logo_50_webp.webp'
                            className="h-6 w-6 mr-2 relative"
                            height={40}
                            width={40}
                            alt='logo'></Image>
                        <span className="text-2xl font-bold text-white">
                            PromptBase
                        </span>
                    </div>
                    {/* div search */}
                    <div className="w-full ">
                        <div className="bg-slate-600 flex justify-between rounded-l-md pl-2">
                            <input
                                type="text"
                                placeholder="Search Prompts"
                                className="bg-transparent w-full "
                            />
                            <div className="flex items-center justify-center h-8 rounded-r-lg w-12 p-0 opacity-100 transition duration-300 bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="shrink-0">
                        div 1-3
                    </div>
                </div>

                {/* sub nav */}
                <div>
                    div 2
                </div>
            </div>
        </nav >
    )
}