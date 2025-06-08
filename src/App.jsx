import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certification';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
