
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/PlayersData/Players'
import NewsLetter from './components/Footer/NewsLetter'

const fetchPlayer = fetch('/data.json').then(res => res.json())

function App() {
  const [status , setStatus] =useState('available')
  

  

  return (
    <>
      <header className='max-w-[1320px] mx-auto mt-5'>
        <Navbar></Navbar>
        <Hero></Hero>


      </header>
      <main className='max-w-[1320px] mx-auto'>
        <Suspense fallback={<div className=' flex justify-center items-center text-8xl'><span className="loading loading-bars loading-xl"></span></div>}>

          <Players fetchPlayer={fetchPlayer} status ={status} setStatus={setStatus} ></Players>
        </Suspense>


      </main>
      <footer className='bg-black py-15 mt-10'>
        <NewsLetter></NewsLetter>

      </footer>
        
      
    </>
  )
}

export default App
