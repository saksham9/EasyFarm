import React from 'react';
import MyNavbar from './components/myNavbar/myNavbar.component';
import Intro1 from './components/Intro/intro1';
import Service from './components/Service/Service';
import {Parallax} from 'react-parallax';
import './App.css';

function App() {
  return (
    <div className="App">
    <MyNavbar/>
    <Parallax
            blur={10}
            bgImage={require('./images/farm.jpg')}
            bgImageAlt="the cat"
            strength={200}
        >
        <Intro1/>
        </Parallax>
    <Service/>
    </div>
  );
}

export default App;
