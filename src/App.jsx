import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  

  return (
    <main className='h-auto w-screen flex justify-center bg-white text-black'>
      <section className='h-auto items-center flex flex-col w-fit md:w-10/12 '>
        <Navbar />
        <section id="Home" className='w-full h-auto my-6 flex flex-col-reverse lg:flex-row lg:justify-evenly items-center gap-2'>
          <Home />
        </section>
        <section id="Projects" className='w-full h-auto flex items-center justify-center my-6 '>
          <Projects />
        </section>
        <section id="Contact" className='w-full h-auto my-6'>
          <Contact />
        </section>
      </section>
    </main>
  )
}

export default App