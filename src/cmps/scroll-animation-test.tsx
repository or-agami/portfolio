import { useInView } from 'react-intersection-observer';
import logo from '../logo.svg';

export const ScrollAnimationTest = () => {
  // const { ref, inView, entry } = useInView({
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  return (
    <div id='services' className={`scroll ${inView ? 'visible' : 'invisible'}`} ref={ref}>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};