import "./Hero.css"
const Hero = () => {
    return (
        <>
            <section className='flex flex-col items-center justify-center py-24 '>
                <h1 className='text-[60px] text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#FFE44B] '>
                    <strong>AI</strong> to write code, blogs & more</h1>
                <p className=" text-[22px] text-[#646977] max-w-3xl text-center mt-2">Enhance everything you do by using the latest from OpenAI to solve problems, write solutions and make life easier.</p>
                <button className=' text-white font-semibold rounded-lg py-3 px-7 mt-6 bg-gradient-to-r from-teal-500 to-indigo-700'>
                    Get Started</button>
            </section>
            <section className=" relative  shadow-2xl shadow-gray-800 rounded-2xl border flex flex-col md:flex-row
            divide-y-2 md:divide-y-0
            md:divide-x-2 z-10 bg-white">
                <div className="p-8 flex-1 flex flex-col justify-between items-start">
                    <div className="">
                        <h2 className="  text-3xl">Explain Code</h2>
                        <p className=" text-gray-500">Explain some code based on the syntax provided</p>
                        <h3 className=" text-lg my-4">Paste your code below:</h3>
                        <code className="flex h-[130px] bg-gray-100 p-4 mb-3">
                            function HelloWorld(text)
                            echo text || "Hello World";
                        </code>
                    </div>

                    <button className=" px-6 py-2 text-white rounded-[5px]  bg-gradient-to-r from-purple-500 to-blue-500">
                        Enhance with AI</button>

                </div>
                <div className="p-8 flex-1 flex flex-col justify-between items-start">
                    <div className="">
                        <h2 className="text-[24px]">What does this code do?</h2>
                        <p className="text-gray-500 mb-4">The following code does:</p>
                        <div className=" flex flex-col text-base leading-5 mb-8">
                            <p className=" border-b py-3"> + The code above is a function definition.</p>
                            <p className="border-b py-3">+ It defines a new function called `HelloWorld` that takes a single argument called `text`</p>
                            <p className="py-3">+ The body of the function is a single line of code that prints out the value of `text` if it is defined, or `Hello World` if it is not defined.</p>

                        </div>
                    </div>
                    <p className=" text-sm text-gray-500 bg-gray-100 rounded-xl py-2 px-6">Copy Output</p>

                </div>
            </section>
            <section className=" -mx-10 lg:-mx-[300px] -mt-20 pt-20 px-10 lg:px-[300px]  z-0
            bg-gradient-to-r from-purple-600 to-indigo-800 relative">

                <div className=" absolute w-48 h-48 top-[450px] left-[0px]" >
                    <img src="./g1.svg" alt="" />
                </div>
                <div className=" absolute w-48 h-48 top-[300px] right-[100px]" >
                    <img src="./g2.svg" alt="" />
                </div>
                <div className=" absolute w-20 h-20  lg:w-48 lg:h-48 
                top-[-50px] left-[-0px] lg:top-[-100px] lg:left-[0px]" >
                    <img src="./g3.svg" alt="" />
                </div>


                <ul className=" flex justify-between flex-wrap gap-2 mt-5 text-[#1F00BB]">
                    <li className="py-2 px-6 bg-white rounded-xl">Explain Code</li>
                    <li className="py-2 px-6 bg-[#A998FF] rounded-xl">Regex</li>
                    <li className="py-2 px-6 bg-[#A998FF] rounded-xl">Convert Code</li>
                    <li className="py-2 px-6 bg-[#A998FF] rounded-xl">Fix Grammar</li>
                    <li className="py-2 px-6 bg-[#A998FF] rounded-xl">Todo</li>
                    <li className="">
                        <img src="./OpenAI_Logo.svg" alt="" />
                    </li>
                </ul>
                <div className="py-10 flex flex-col items-center ">
                    <button className="px-8 py-3 text-[#1F00BB] font-semibold rounded-xl  bg-white">Free Signup</button>
                    <div className=" text-center mt-16 mb-14">
                        <h1 className="text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#FFE44B] ">Use the latest AI features</h1>
                        <p className="text-white max-w-[750px] text-[20px] " >Start enhancing a range of tasks using AI, from writing emails, code, or blogs, to rephrasing paragraph’s you just want to reword!</p>
                    </div>
                    <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-5 px-10">

                        <li className="bg-white p-3 rounded-xl relative ">
                            <p className=" text-gray-400">content</p>
                            <h3 className="text-black">Explain Code</h3>
                            <p className="text-gray-400">Explain some code based on the syntax provided</p>

                        </li>
                        <li className="bg-white p-3 shadow-[0] rounded-xl">
                            <p className=" text-gray-400">content</p>
                            <h3 className="text-black">Explain Code</h3>
                            <p className="text-gray-400">Explain some code based on the syntax provided</p>
                        </li>
                        <li className="bg-white p-3 shadow-[0] rounded-xl">
                            <p className=" text-gray-400">content</p>
                            <h3 className="text-black">Explain Code</h3>
                            <p className="text-gray-400">Explain some code based on the syntax provided</p>
                        </li>
                        <li className="bg-white p-3 shadow-[0] rounded-xl">
                            <p className=" text-gray-400">content</p>
                            <h3 className="text-black">Explain Code</h3>
                            <p className="text-gray-400">Explain some code based on the syntax provided</p>
                        </li>
                        <li className="bg-white p-3 shadow-[0] rounded-xl">
                            <p className=" text-gray-400">content</p>
                            <h3 className="text-black">Explain Code</h3>
                            <p className="text-gray-400">Explain some code based on the syntax provided</p>
                        </li>
                        <li className="bg-white p-3 shadow-[0] rounded-xl">
                            <p className=" text-gray-400">content</p>
                            <h3 className="text-black">Explain Code</h3>
                            <p className="text-gray-400">Explain some code based on the syntax provided</p>
                        </li>

                    </ul>
                </div>
            </section>

        </>
    )
}

export default Hero