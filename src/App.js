import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Translate from './components/translate/Translate';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

function App() {
  return(
    <>
     <Header />
     <main className='main' >
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Translate />
     </main>
    <Footer />
    </>
  );
}

export default App;
