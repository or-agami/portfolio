import './styles/main.scss';
import { useEffect } from 'react';
import { AboutMe } from './cmps/about-me';
import { Footer } from './cmps/foolter';
import { Header } from './cmps/header';
import { Hero } from './cmps/hero';
import { Portfolio } from './cmps/portfolio';
// import { ScrollAnimationTest } from './cmps/scroll-animation-test';
import { Specialties } from './cmps/specialties';
import { animateScroll as scroll } from "react-scroll"
import { ContactMe } from './cmps/contact-me';

function App() {
  useEffect(() => {
    if (window.location.hash && window.scrollY < 10) {
      setTimeout(() => { scroll.scrollMore(-60) }, 100)
    }
  })
  // }, [])
  return (
    <div className="App">
      <Header />
      <Hero />
      <Specialties />
      <Portfolio />
      {/* <ScrollAnimationTest /> */}
      <p className="font-test roboto">Roboto - Or Agami</p>
      <p className="font-test roboto-light">Roboto-light - Or Agami</p>
      <p className="font-test roboto-medium">Roboto-medium - Or Agami</p>
      <p className="font-test roboto-bold">Roboto-bold - Or Agami</p>
      <p className="font-test roboto-slab">roboto-slab - Or Agami</p>
      <p className="font-test dancing-script">dancing-script - Or Agami</p>
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
