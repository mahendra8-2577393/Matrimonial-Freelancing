import React from 'react'
import Navbar from './components/Navbar'
import bgImage from "./images/heroin.jpg"
import SearchForm from './components/SearchForm'

const App = () => {
  return (
    <div
    className="absolute h-full w-full inset-0 bg-cover bg-center bg-no-repeat p- m-0"
    style={{
    backgroundImage: `url(${bgImage})`,
  }}
    >
      <div className='relative h-screen w-full bg-black/30 flex flex-col justify-between items-center'>
        <div className='w-full flex justify-center items-center'>
        <Navbar/>
        </div>
        <div className=' text-white text-4xl md:text-7xl font-customFont font-bold'>
          Most Verified Partner <br/> Only At Suknvivah
        </div>
        <div className='w-full flex justify-center items-center '> 
        <SearchForm/>
        </div>
      </div>
      
    </div>
  )
}

export default App