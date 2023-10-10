
import React from 'react'
import Header from './components/Header';
import Design from './components/Design'
import Skills from './components/Skills'
import Banner from './components/Banner'
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (


    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-auto">
      <div className="max-w-6xl mx-auto text-white">
        {/* Header */}
        <Header />
        {/* Banner */}
      <div className='w-full ' style={{marginTop:'60px'}}><Banner/></div>
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
      <div >
    <About/>
  </div>
  <div >
    <Skills/>
  </div>
  <div>
    <Projects/>
  </div>
  <div>
    <Resume/>
  </div>
  
    </div>
    
    );
  }
  
  export default App;
    

