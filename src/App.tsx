import './styles/main.scss';
import { useEffect } from 'react';
import { AboutMe } from './cmps/about-me';
import { Footer } from './cmps/footer';
import { Header } from './cmps/header';
import { Hero } from './cmps/hero';
import { Portfolio } from './cmps/portfolio';
import { Specialties } from './cmps/specialties';
import { animateScroll as scroll } from "react-scroll"
import { ContactMe } from './cmps/contact-me';

function App() {

  useEffect(() => {
    if (window.location.hash && window.scrollY < 10) {
      setTimeout(() => { scroll.scrollMore(-60) }, 100)
    }
  })

  return (
    <div className="App">
      <ContactMe />
      <Header />
      <Hero />
      <Specialties />
      <Portfolio />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App;
