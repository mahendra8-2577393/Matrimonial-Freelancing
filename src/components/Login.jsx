
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import logo1 from "../images/finalLogo.gif"
import { FaGoogle, FaFacebook, FaYahoo, FaTwitter } from "react-icons/fa"; // Importing icons for social login buttons

const Login = ({ setShowLogin }) => {
    return (
        <div className="bg-white text-black  sm:w-screen h-full  px-5 rounded-lg shadow-md max-w-md mx-auto relative ">
            {/* Close Button */}
            <button
                className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowLogin(false)}
            >
                &times;
            </button>

            {/* Logo and Welcome Heading */}
            <div className="text-center pb-2 flex flex-col items-center justify-center md:mb-6">
                <img className="h-20 w-30 items-center justify-center" src={logo1} />
                <h2 className="lg:text-3xl  md:text-lg "><b>Welcome To Sukhvivah!</b> ❤️</h2>
            </div>

            {/* Form Section */}
            <form className="lg:px-4">
                <div className="mb-4 ">
                    <label className="block mb-2 text-sm pt-1">Mobile No. / Email Id *</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="text-sm rounded-lg w-full p-2 text-black border-black border-2 h-9"
                            placeholder="Enter your Mobile No. / Email Id"
                        />
                        {/* <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <i className="far fa-envelope"></i> 
                </span> */}
                    </div>
                </div>

                <div className="mb-2">
                    <label className="block mb-1 text-sm">Password *</label>
                    <div className="relative">
                        <input
                            type="password"
                            className="p-2 rounded-lg w-full text-sm border-black border-2 text-black"
                            placeholder="Enter your Password"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                            <i className="fas fa-eye-slash"></i> {/* Eye icon for password visibility */}
                        </span>
                    </div>
                </div>

                {/* Remember Me and Forgot Password Links */}
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox text-pink-500" />
                        <span className="ml-2 text-sm">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-pink-500">Forgot password?</a>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-500 p-2 rounded-lg"
                >
                    Login
                </button>

                {/* OR Divider */}
                <div className="flex items-center my-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-400">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="flex justify-evenly mb-3 gap-1 mx-auto ">
                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <FaFacebook className="text-blue-500" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <FaTwitter className="text-orange-500" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <BiLogoGmail className="text-green-500" />
                    </button>


                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <FaGoogle className="text-red-500" />
                    </button>

                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <FaYahoo className="text-purple-500" />
                    </button>
                </div>

                {/* Login with OTP Button */}
                <div className="text-center mb-3">
                    <button
                        type="button"
                        className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-lg transition duration-200"
                    >
                        Login with OTP
                    </button>
                </div>

                {/* Signup Link */}
                <div className="text-center ">
                    <p className="text-black text-sm pr-3">
                        New to Sukhvivah?{" "}
                        <a href="#" className="text-pink-500 font-bold">Sign Up</a>
                    </p>
                </div>
            </form>

        </div>
    );
};

export default Login;
