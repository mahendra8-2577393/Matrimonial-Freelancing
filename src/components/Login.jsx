// src/components/Login.js
import React from "react";
import { FaGoogle, FaFacebook, FaYahoo } from "react-icons/fa"; // Importing icons for social login buttons

const Login = ({ setShowLogin }) => {
    return (
        <div className="bg-neutral-800   h-full p-10 rounded-lg shadow-md max-w-md mx-auto relative ">
            {/* Close Button */}
            <button
                className="absolute ttop-2 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowLogin(false)}
            >
                &times;
            </button>

            {/* Logo and Welcome Heading */}
            <div className="text-center md:mb-6">
                <h2 className="text-white text-xl md:text-2xl mb-4">Welcome To Sukhvivah! ❤️</h2>
            </div>

            {/* Form Section */}
            <form>
                <div className="mb-4">
                    <label className="text-white block mb-2">Mobile No. / Email Id *</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="p-2 rounded-lg w-full text-black"
                            placeholder="Enter your Mobile No. / Email Id"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                            <i className="far fa-envelope"></i> {/* Email/Mobile icon */}
                        </span>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-white block mb-2">Password *</label>
                    <div className="relative">
                        <input
                            type="password"
                            className="p-2 rounded-lg w-full text-black"
                            placeholder="Enter your Password"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                            <i className="fas fa-eye-slash"></i> {/* Eye icon for password visibility */}
                        </span>
                    </div>
                </div>

                {/* Remember Me and Forgot Password Links */}
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center text-white">
                        <input type="checkbox" className="form-checkbox text-pink-500" />
                        <span className="ml-2 text-sm">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-pink-500">Forgot password?</a>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                    Login
                </button>

                {/* OR Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-400">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="flex justify-around mb-6">
                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <FaGoogle className="text-red-500" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <FaFacebook className="text-blue-500" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:shadow-md">
                        <FaYahoo className="text-purple-500" />
                    </button>
                </div>

                {/* Login with OTP Button */}
                <div className="text-center mb-6">
                    <button
                        type="button"
                        className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-lg transition duration-200"
                    >
                        Login with OTP
                    </button>
                </div>

                {/* Signup Link */}
                <div className="text-center">
                    <p className="text-white text-sm">
                        New to Sukhvivah?{" "}
                        <a href="#" className="text-pink-500 font-bold">Sign Up</a>
                    </p>
                </div>
            </form>

        </div>
    );
};

export default Login;
