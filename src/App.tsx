import { Header } from './cmps/header';
import { Hero } from './cmps/hero';
import logo from './logo.svg';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div id='services'>
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
    </div>
  );
}

export default App;
