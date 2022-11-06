import { Header } from './cmps/header';
import { Hero } from './cmps/hero';
import { ScrollAnimationTest } from './cmps/scroll-animation-test';
import logo from './logo.svg';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <h1>scroll start</h1>
      <ScrollAnimationTest />
      <h1>scroll end</h1>
    </div>
  );
}

export default App;
