
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/PlayersData/Players'
import NewsLetter from './components/Footer/NewsLetter'

const fetchPlayer = fetch('/data.json').then(res => res.json())
function App() {
  

  

  return (
    <>
      <header className='max-w-[1320px] mx-auto mt-5'>
        <Navbar></Navbar>
        <Hero></Hero>


      </header>
      <main className='max-w-[1320px] mx-auto'>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>

          <Players fetchPlayer={fetchPlayer} ></Players>
        </Suspense>


      </main>
      <footer className='bg-black py-15 mt-10'>
        <NewsLetter></NewsLetter>

      </footer>
        
      
    </>
  )
}

export default App
