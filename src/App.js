import Navbar from './components/organisms/Navbar/Navbar';
import AboutMe from './components/organisms/AboutMe/AboutMe';
import Home from './components/organisms/Home/Home';
import Skills from './components/organisms/Skills/Skills';
import Projects from './components/organisms/Projects/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
