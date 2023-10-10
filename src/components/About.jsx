import React from "react";

import styles from "./About.module.css";


 const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>I'm <span style={{color:"aqua"}}>Abhirami</span></h3>
              <h4>Full Stack Developer</h4> <br />
              <p>I am a Full-Stack developer. 
          I am a Software Development undergraduate from University Of Kerala.
          I am very passionate about improving my coding skills & developing  WebApps & websites.
          I build WebApps and Websites using MEA(R)N Stack.
          Working for myself to improve my skills.
          Love to build Full-Stack clones. </p> <br />
          <h4><span style={{color:'aquamarine'}}>Email : </span>abhiramikarthikeyan29@gmail.com</h4>
            </div>
          </li>
          
        </ul>
        <img  style={{width:'250px'}} src="assets/aboutImage.png" alt="img" />
      </div>
    </section>
  );
};
export default About