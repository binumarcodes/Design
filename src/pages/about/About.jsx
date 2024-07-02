import React from 'react';
import aboutstyles from "./About.module.css";
import Me from "../../../src/assets/Me.jpg";
import Button from '../../components/Button/Button';

function About() {

  const handleDownloadCV = () => {
    window.open("https://docs.google.com/document/d/1T1Z4dWEtpMbJps_aNdPOosjp0dy55TiQfyG4_viGM60/edit?usp=sharing", "_blank");
  };

  return (
    <div className={aboutstyles["container"]} id='about'>
      <div className={aboutstyles["cards"]}>
        <div className={aboutstyles["left"]}>
          <div className={aboutstyles["card"]}>
            <div className={aboutstyles["image-card"]}>
              <img src={Me} alt="My Picture" className={aboutstyles["my-picture"]} />
            </div>
            <p className={aboutstyles["card-greetings"]}>Hey again 👋</p>
            <p className={aboutstyles["card-text"]}>
              I am currently a UI/UX designer, Product Designer and also a Web and Mobile Designer. I create intuitive and engaging user experiences that positively impact people's lives by making interactions seamless and enjoyable.
            </p>
            <Button btnText={"Let's Connect"} />
          </div> 
        </div>
        <div className={aboutstyles["right"]}>
          <div className={aboutstyles["card2"]}>
            <p className={aboutstyles["card-greetings"]}>A little bit about me</p>
            <p className={aboutstyles["card-text"]}>
              I am a 20-year-old UI/UX designer passionate about creating visually appealing and user-friendly interfaces. My design philosophy is centered around empathy and understanding user needs. I am currently studying English at university, which enhances my communication and collaboration skills. My journey into design started when I was captivated by the creative potential of digital tools in primary school.
            </p>
            <button className={aboutstyles["skill-btn"]} onClick={handleDownloadCV}>Download CV</button>
          </div> 
          <div className={aboutstyles["card3"]}>
            <p className={aboutstyles["card-greetings"]}>Experience</p>
            <button className={aboutstyles["skill-btn2"]}>Adobe XD</button>
            <p className={aboutstyles["card-text"]}>
              Proficient in Adobe XD for designing wireframes, prototypes, and high-fidelity mockups, ensuring an efficient and iterative design process.
            </p>
            <hr style={{borderColor: "gray", marginTop: 5, marginBottom: 5}}/>
            <button className={aboutstyles["skill-btn2"]}>Figma</button>
            <p className={aboutstyles["card-text"]}>
              Experienced in using Figma for collaborative design projects, creating responsive designs, and maintaining design systems.
            </p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default About;
