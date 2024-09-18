import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Navbar from './sections/Navbar/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <section id="experience">
        <h2 className='sectionTitle'>Experience</h2>
        {/* Add your experience content here */}
      </section>
      <section id="skills">
        <h2 className='sectionTitle'>Skills</h2>
        {/* Add your skills content here */}
      </section>
      <section id="funfacts">
        <h2 className='sectionTitle'>Fun Facts</h2>
        {/* Add your fun facts content here */}
      </section>
    </>
  );
}

export default App;

