import { useEffect } from 'react';
import { AboutMe } from './cmps/about-me';
import { Footer } from './cmps/foolter';
import { Header } from './cmps/header';
import { Hero } from './cmps/hero';
import { Portfolio } from './cmps/portfolio';
import { ScrollAnimationTest } from './cmps/scroll-animation-test';
import { Specialties } from './cmps/specialties';
import logo from './logo.svg';
import { animateScroll as scroll } from "react-scroll"
import './styles/main.scss';

function App() {
  useEffect(() => {
    if (window.location.hash && window.scrollY < 10) {
      setTimeout(() => { scroll.scrollMore(-68) }, 100)
    }
  })
  // }, [])
  return (
    <div className="App">
      <Header />
      <Hero />
      <Specialties />
      <Portfolio />
      <h1>scroll start</h1>
      <ScrollAnimationTest />
      <h1>scroll end</h1>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
