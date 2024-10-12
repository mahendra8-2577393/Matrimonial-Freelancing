// src/components/SearchForm.js
import React from "react";

const SearchForm = ({ setShowLogin }) => {
    // Generate options for age from 20 to 80
    const ageOptions = Array.from({ length: 8 }, (_, i) => 23 + i);

    return (

        <div className="absolute bottom-5 text-center bg-neutral-900/20 rounded-lg w-full md:w-[80%] mx-auto">

            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-2 md:gap-2 w-[90%] mx-auto">
                <div className="flex flex-col items-center">
                    <label className="text-white ">I'm looking for</label>
                    <select className="p-2 rounded-xl bg-white h-[40px] w-[150px] md:w-[250px] overflow-auto">
                        <option>Woman</option>
                        <option>Man</option>
                        <option>Gay</option>
                        <option>Transgender</option>

                        <option>Other</option>
                    </select>
                </div>

                <div className="flex items-end gap-0.5 justify-evenly">
                    <div className="flex flex-col items-center">
                        <label className="text-white ">Aged</label>
                        <select className="p-2 rounded-xl bg-white max-h-[200px] w-[60px] overflow-auto">
                            {/* <option>Select Age</option> */}
                            {ageOptions.map((age) => (
                                <option key={age}>{age }</option>
                            ))}
                        </select>
                    </div>
                    <div className="text-white pb-2 text-lg">to</div>
                    <div className="flex flex-col items-center">
                        <select className="p-2 rounded-xl bg-white w-[60px] overflow-auto">
                            {/* <option>Select Age</option> */}
                            {ageOptions.map((age) => (
                                <option key={age  + 5}>{age + 5}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <label className="text-white ">of Religion</label>
                    <select className="p-2 rounded-xl bg-white max-h-[200px] w-[150px] md:w-[200px] overflow-auto">
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Christian</option>
                        <option>Sikh</option>
                        <option>Buddhist</option>
                        <option>Jain</option>
                        <option>Jewish</option>
                        <option>Atheist</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="flex flex-col items-center">
                    <label className="text-white ">Mother tongue</label>
                    <select className="p-2 rounded-xl bg-white max-h-[200px] w-[150px] md:w-[200px] overflow-auto">
                        <option>Hindi</option>
                        <option>Marathi</option>
                        <option>English</option>
                        <option>Punjabi</option>

                        <option>Other</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 md:flex-row justify-center items-center ">
                <div className="flex flex-col items-center">
                    <label className="text-white ">Country</label>
                    <select className="p-2 rounded-xl bg-white max-h-[200px] w-[150px] md:w-[200px] lg:w-[300px] overflow-auto">
                        <option>India</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>UK</option>
                        <option>Australia</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="flex flex-col items-center">
                    <label className="text-white ">State</label>
                    <select className="p-2 rounded-xl bg-white max-h-[200px] w-[150px] md:w-[200px] lg:w-[300px] overflow-auto">
                        <option>Maharashtra</option>
                        <option>Gujarat</option>
                        <option>Delhi</option>
                        <option>Tamil Nadu</option>
                        <option>Karnataka</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Button to show Login form */}
                <div className="hidden md:flex flex-col items-center ">
                    <button
                        className="mt-6 mx-auto p-3 w-[250px] bg-pink-500 text-white rounded-full hover:bg-pink-700"
                        // onClick={() => setShowLogin(true)} // This sets the state to show Login
                    >
                        Let's Begin
                    </button>
                </div>

                
            </div>
            {/* Button to show Login form */}
                <div className="flex flex-col items-center md:hidden">
                    <button
                        className="mt-6 mx-auto p-3 w-[250px] bg-pink-500 text-white rounded-full hover:bg-pink-700"
                        // onClick={() => setShowLogin(true)} // This sets the state to show Login
                    >
                        Let's Begin
                    </button>
                </div>
        </div>
    );
};

export default SearchForm;
