import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
