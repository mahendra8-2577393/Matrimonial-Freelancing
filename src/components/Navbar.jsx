import React, { useState } from 'react'
import Logo from "../images/Logo.png"
import { LiaHeadsetSolid } from "react-icons/lia";
import { MdInstallMobile } from "react-icons/md";
import Login from "./Login.jsx";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {

    const [showHelpPopup, setShowHelpPopup] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const toggleHelpPopup = () => {
        setShowHelpPopup(!showHelpPopup);
    };

    const toggleLoginPopup = () => {
        setShowLoginPopup(!showLoginPopup);
    };

    return (
        <div className='w-full text-xl text-white p-2  sm:p-4 flex justify-between md:w-[90%] lg:w-[80%] items-center'>
            {/* Logo  */}
            <div className='left'><img src={Logo} alt="Logo" className='sm:w-60 w-[10rem] md:w-[15rem]' /></div>



            <div className='right flex items-center'>
            <div className=' flex justify-center items-center gap-10 text-slate-200'>
                {/* Search Bar  */}
                <div className='hidden md:inline-block'>
                    <input
                        type="text"
                        placeholder="Search a profile"
                        className="border-2 border-white placeholder:text-slate-300 rounded-lg py-2 px-4 text-sm bg-transparent"
                    />
                </div>
                <div className=' flex justify-center items-center gap-3'>
                    <MdInstallMobile className='sm:hidden' />
                    <div onClick={toggleHelpPopup} className='flex justify-center gap-1'>
                     <LiaHeadsetSolid className='hover:cursor-pointer'/>
                      <span className='hidden sm:inline-block'>
                        <button
                            
                            className="text-white hover:text-gray-30 flex items-center"
                        >
                            Help <IoIosArrowUp />
                        </button>
                    </span>
                    </div>
                    
                </div>

                <div>
                    <button
                        onClick={toggleLoginPopup}
                        className="text-white hover:text-gray-300 flex items-center gap-1"
                    >
                        Login <IoIosArrowUp />
                    </button>
                </div>
                {/* Help Popup */}
                {showHelpPopup && (
                    <div className="absolute right-5 top-[100px] font-serif bg-rose-600 border p-4  text-black rounded-lg shadow-lg z-10">
                        <div className="w-[350px] h-[250px] ">
                            <div className="hover:border-2 border-black p-2 rounded-2xl">

                                <h2 className="text-lg font-semibold">Raise Ticket</h2>
                                <p className="mt-2 text-sm">Raise ticket for your complain and your problem get solved in 48 hours</p>
                            </div>

                            <div className="hover:border-2 border-black p-1 rounded-2xl">
                                <h2 className="text-lg font-semibold">Appointment</h2>
                                <p className="mt-2 text-sm">Email us about your appointment and we will will responsd within 48 hours </p>

                            </div>

                            <div className="hover:border-2 border-black p-1 rounded-2xl">
                                <h2 className="text-lg font-semibold">Contact us</h2>
                                <p className="mt-2 text-sm">Mail us about your Complaint and we will get back to you within 48 hours. support@sukhvivah.com</p>

                            </div>

                        </div>

                        <button
                            onClick={toggleHelpPopup}
                            className="mt-4 text-blue-500 hover:underline pt-5"
                        >
                            Close
                        </button>
                    </div>
                )}

                {/* Login Popup */}
                {showLoginPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <Login setShowLogin={setShowLoginPopup} /> {/* Pass setShowLoginPopup */}
                    </div>
                )}
            </div>
            </div>



        </div>
    )
}

export default Navbar