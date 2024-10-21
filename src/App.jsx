import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Navbar from './sections/Navbar/Navbar';
import Experience from './sections/Experience/Experience';
import Skills from './sections/Skills/skills';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />

      <section id="funfacts">
        <h2 className='sectionTitle'>Fun Facts</h2>
        {/* Add your fun facts content here */}
      </section>
    </>
  );
}

export default App;

