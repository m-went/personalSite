import Navbar from './components/organisms/Navbar/Navbar';
import AboutMe from './components/organisms/AboutMe/AboutMe';
import Home from './components/organisms/Home/Home';
import Skills from './components/organisms/Skills/Skills';
import Projects from './components/organisms/Projects/Projects';
import Contact from './components/organisms/Contact/Contact';
import Footer from './components/atoms/Footer/Footer';
import ComicDialog from './components/organisms/ComicDialog/ComicDialog';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ComicDialog />
    </div>
  );
}

export default App;
