// src/components/SearchForm.js
import React from "react";

const SearchForm = ({ setShowLogin }) => {
    // Generate options for age from 20 to 80
    const ageOptions = Array.from({ length: 8 }, (_, i) => 20 + i);

    return (

        <div className="text-center bg-neutral-900/40 pt-4 rounded-lg w-full md:w-[100%] items-center justify-center mx-auto">
            <div className="mb-6 pb-3 lg:flex flex-wrap gap-2  mx-auto items-center justify-center">

                <div className="flex gap-2 items-center justify-center">
                    <div className="flex flex-col items-center">
                        <label className="text-white ">I'm looking for</label>
                        <select className="p-2 rounded-xl bg-white h-[40px] w-[150px] md:w-[200px] sm:w-[30px] overflow-auto">
                            <option>Woman</option>
                            <option>Man</option>
                            <option>Gay</option>
                            <option>Transgender</option>

                            <option>Other</option>
                        </select>
                    </div>



                    <div className="flex items-end gap-0.5 justify-center">
                        <div className="flex flex-col items-center">
                            <label className="text-white ">Aged</label>
                            <select className="p-2 rounded-xl bg-white max-h-[200px] w-[65px] md:w-[90px] overflow-auto">
                                {/* <option>Select Age</option> */}
                                {ageOptions.map((age) => (
                                    <option key={age}>{age}</option>
                                ))}
                            </select>
                        </div>
                        <div className="text-white pb-2 text-lg">to</div>
                        <div className="flex flex-col items-center">
                            <select className="p-2 rounded-xl bg-white w-[65px] md:w-[90px] overflow-auto">
                                {/* <option>Select Age</option> */}
                                {ageOptions.map((age) => (
                                    <option key={age + 5}>{age + 5}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div>

                <div className="flex gap-2 justify-center">

                    <div className="flex flex-col items-center">
                        <label className="text-white ">of Religion</label>
                        <select className="p-2 rounded-xl bg-white max-h-[200px] w-[150px] md:w-[200px] overflow-auto">
                            <option>Hindu</option>
                            <option>Muslim</option>
                            <option>Christian</option>
                            <option>Sikh</option>
                            <option>Buddhist</option>
                            
                        </select>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="text-white ">Mother tongue</label>
                        <select className="p-2 rounded-xl bg-white max-h-[200px] w-[150px] md:w-[200px] overflow-auto">
                            <option>Hindi</option>
                            <option>Marathi</option>
                            <option>English</option>
                            <option>Punjabi</option>

                        </select>
                    </div>

                </div>

                <div className="flex gap-2 justify-center">


                    <div className="flex flex-col items-center">
                        <label className="text-white ">Country</label>
                        <select className="p-2 rounded-xl bg-white max-h-[150px] w-[150px] md:w-[200px] lg:w-[200px] overflow-auto">
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>UK</option>
                            
                        </select>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="text-white ">State</label>
                        <select className="p-2 rounded-xl bg-white max-h-[150px] w-[150px] md:w-[200px] lg:w-[200px] overflow-auto">
                            <option>Maharashtra</option>
                            <option>Gujarat</option>
                            <option>Delhi</option>
                            <option>Tamil Nadu</option>
                            
                        </select>
                    </div>
                </div>

                <div className=" md:flex flex-col items-center md:pb-4 justify-center ">
                    <button
                        className="mt-9 md:m-2 lg:mt-11 pb-2 mx-auto p-3 w-[200px] bg-pink-500 text-white rounded-full hover:bg-pink-700"
                    // onClick={() => setShowLogin(true)} // This sets the state to show Login
                    >
                        Let's Begin
                    </button>
                </div>
            </div>

        </div>

    );
};

export default SearchForm;
