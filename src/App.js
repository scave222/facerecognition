import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Imagelinkform from './components/Imagelinkform/Imagelinkform';

import './App.css';


const particlesOptions={
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_arrea: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
       <Particles className='particles'
            params={particlesOptions}
            
          />
  
      <Navigation />
     <Logo />
     <Rank />
      <Imagelinkform />
     {/* <facerecognition />*/}
    </div>
  );
}

export default App;
