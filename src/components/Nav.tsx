import { useState } from "react"

const Nav = () => {
    const [isOpen, setIsopen] = useState(false)

    return (
        <>
            <nav className="border-b border-gray-300  px-5 py-2">
                <div className="flex justify-between md:justify-center items-center relative  ">

                    <div className=" absolute w-16 h-16 top-[-12px] left-[129px]" >
                        <img src="g2.svg" alt="" />
                    </div>

                    <div className="">
                        <img src="./logo.svg" alt="" width={"280px"} />
                    </div>
                    <ul className="hidden md:flex flex-row items-center ps-10 text-sm lg:text-[18px] text-[#646977] gap-14 justify-start ">
                        <li className="px-6 py-2 text-white  bg-gradient-to-r from-teal-500 to-green-500 rounded-[15px]"
                        >Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Login</li>
                        <li className="px-6 py-2 text-white text-nowrap rounded-[15px]  bg-gradient-to-r from-purple-500 to-blue-500">Free Signup</li>
                    </ul>
                    <button className=" flex md:hidden"
                        onClick={() => setIsopen(!isOpen)}>
                        {isOpen ? <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                            : <svg
                                className="block h-8 w-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        }
                    </button>
                </div>

            </nav>
            {isOpen &&
                <ul className="flex md:hidden bg-gradient-to-b from-purple-500 to-blue-500 min-h-56 py-10 text-[18px] text-white  flex-col 
                 divide-y-2 divide-teal-100">
                    <li className="py-3 w-full text-center">
                        <button className="px-6 py-1   bg-gradient-to-r from-teal-500 to-green-500 rounded-[15px]"
                        >Home</button>
                    </li>
                    <li className="py-3 w-full text-center">Features</li>
                    <li className="py-3 w-full text-center">Pricing</li>
                    <li className="py-3 w-full text-center">Login</li>
                    <li className="py-3 w-full text-center">
                        <button className="px-6 py-1  rounded-[15px]  bg-gradient-to-r from-purple-500 to-purple-600">Free Signup</button>
                    </li>
                </ul>
            }

        </>

    )
}

export default Nav