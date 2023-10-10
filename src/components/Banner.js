import React from "react";
import { Typewriter,Cursor } from 'react-simple-typewriter'
import styles from "./Banner.css";


const Banner = () => {
  const handleType = (count) => {
    console.log(count);
  };
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
 
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-6">
        
        <h3 style={{color:'aquamarine', fontWeight:'bolder'}} className="text-5xl  leading-tight">
          Hi There, <br />{" "}
          <span className="font-bold text-white">I'm Abhirami <span style={{color:'orange'}}>Karthikeyan</span></span>
        </h3>
        <h2 style={{color:'white'}} className="text-4xl font-bold  ">
         I Am Into{''} <span style={{color:'Tomato'}}>

         <Typewriter
            words={['Web Development','Frontend Development','Backend Development']}
            loop={5}
            cursor
           
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />

          </span>
          
        </h2>
        <button className="w-44 bg-indigo-400 px-6 py-4 text-xl font-bold uppercase rounded-full">
          About Me
        </button>
      </div>
      <div className="image">
      <img  src="assets/heroImage.png" alt="me"/>
   </div>
    </div>
   
  );
};

export default Banner;
