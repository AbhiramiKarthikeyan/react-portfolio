import React from "react";
import "../components/Skills.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
  DiPython,
} from "react-icons/di";
import {
  
    SiTailwindcss,
  SiCss3,
  SiRedux,
  SiMongodb,
  SiHtml5,
   SiExpress,
   SiFigma,
 SiBootstrap,
 SiMysql,
 SiGithub,
  SiAngular,
   SiNetlify
} from "react-icons/si";

const Skills = () => {
  return (
    
   <section className="container">
    <h3 >Skills</h3> 
        <div className="container-fluid " style={{ textAlign:"center", justifyContent: "center", paddingBottom: "50px" }}>
            
          <div  className="tech-icons d-flex">
            <SiHtml5 />
          </div>
          <div  className="tech-icons">
            <DiJavascript1 />
          </div>
          <div  className="tech-icons">
            <DiNodejs />
          </div>
          <div className="tech-icons">
            <DiReact />
          </div>
          <div className="tech-icons">
            <SiRedux />
          </div>
          <div  className="tech-icons ">
            <SiMongodb />
          </div>
          <div className="tech-icons">
            <SiTailwindcss/>
          </div>
          <div  className="tech-icons">
            <SiCss3/>
          </div>
          
          <div  className="tech-icons">
            <DiJava />
          </div>
          <div  className="tech-icons">
            <DiPython />
          </div>
          <div  className="tech-icons">
            < SiExpress/>
          </div>
          <div  className="tech-icons ">
            <SiFigma />
          </div>
          <div  className="tech-icons">
            <SiBootstrap />
          </div>
          <div  className="tech-icons">
            <SiMysql />
          </div>
          <div  className="tech-icons">
            <SiGithub />
          </div>
          <div  className="tech-icons">
            <SiAngular/>
          </div>
          <div  className="tech-icons">
            <SiNetlify/>
          </div>

        </div>
   </section>
  );
}

export default Skills;