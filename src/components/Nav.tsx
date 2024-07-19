
const Nav = () => {
    return (
        <nav className="border-b border-gray-300 py-2 flex justify-center relative ">
            <div className=" absolute w-16 h-16 top-[-12px] left-[129px]" >
                <img src="g2.svg" alt="" />
            </div>

            <div className="">
                <img src="./logo.svg" alt="" width={"280px"} />
            </div>
            <div className=" flex items-center ps-10 text-[20.2px] text-[#646977]" style={{ fontFamily: 'Roboto' }}>
                <ul className="flex flex-row gap-14 justify-start items-center ">
                    <li className="px-6 py-1 text-white  bg-gradient-to-r from-teal-500 to-green-500 rounded-[15px]"
                    >Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Login</li>
                    <li className="px-6 py-1 text-white rounded-[15px]  bg-gradient-to-r from-purple-500 to-blue-500">Free Signup</li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav