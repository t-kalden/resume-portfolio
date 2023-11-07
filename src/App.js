import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {

  // TYPEWRITING EFFECT
  // const [ text ] = useTypewriter({
  //   words : ['Designer', 'Developer', 'Problem Solver'],
  //   loop : {},
  // })

  // gsap.registerPlugin(ScrollTrigger);

  // gsap.to('#slide-right', {
  //   right: '0',
  //   duration: .8,
  //   scrollTrigger: '#slide-right',
  //   ease: 'power2.easeInOut'
  // })

  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      {/* 
      TYPEWRITING EFFECT
      <header className="App-header">
        <h1 className="text-4xl font-signature" id="test" 
        style={{position: 'absolute', left: 50, top: 50}}>
          I am a :  &nbsp;
        <span id="animateText">{ text }</span>
        <Cursor />
        </h1>
      </header>
      <div className="space-filler" style={{height: '1300px', width: '100%'} }></div>
      
      <div id="slide-right"
        style={{
          fontSize: '32px', 
          height: '200px', 
          width: '100%',
          position: 'absolute', 
          margin: 0,
          padding: 0,
          right: '99%',
          background: 'salmon',
          display: 'flex', 
          flexDirection: 'column',
          justifyContent:"center",
          textAlign: 'center',
        }}>
        HERE IS MY SLIDE
      </div> */}
    </div>
  );
}

export default App;
