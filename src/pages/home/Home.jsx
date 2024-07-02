import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import homestyles from "./Home.module.css";
import CartoonMe from "../../../src/assets/memoji.png";

function Home() {
  const titles = ["UI/UX Designer", "Web Designer", "Mobile Designer"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedText === titles[titleIndex]) {
        setIsDeleting(true);
      }

      setTypedText((prev) => {
        if (isDeleting) {
          return prev.substring(0, prev.length - 1);
        } else {
          return titles[titleIndex].substring(0, prev.length + 1);
        }
      });

      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [typedText, isDeleting, titleIndex, titles, typingSpeed]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring", stiffness: 500, damping: 30 }
    },
    text: {
      width: 150,
      height: 150,
      backgroundColor: "#7127BA",
      mixBlendMode: "difference",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      transition: { type: "spring", stiffness: 500, damping: 30 }
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className={homestyles.container}>
      <div className={homestyles["top-content"]}>
        <div className={homestyles["image-container"]}>
          <div>
            <img src={CartoonMe} alt="" className={homestyles.meImage} />
          </div>
          <div className={homestyles["top-right-content"]}>
            <div className={homestyles["arrow"]}></div>
            <motion.div
              className={homestyles["cursor"]}
              variants={variants}
              animate={cursorVariant}
              style={{ position: 'fixed', top: 0, left: 0 }}
            />
            <p onMouseEnter={textEnter} onMouseLeave={textLeave} className={homestyles["greeting-text"]}>
              Hello, I'm <span style={{ color: "#7127BA" }}>Abdulrahman Bin Umar</span>
            </p>
            <div className={homestyles["about-content"]}>
              <p className={homestyles["about1"]} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                A Designer who
              </p>
              <p className={homestyles["about2"]} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Jusdges a book by it<span style={{ color: "#7127BA" }} onMouseEnter={textEnter} onMouseLeave={textLeave}> cover</span>...
              </p>
              <p className={homestyles["about3"]} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Because if it doesn't evoke beauty and clarity, what else can?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={homestyles["bottom-contents"]}>
        <h1 className={homestyles["about4"]}>
          I'm a {typedText}
          <span className={homestyles.typingCursor}>|</span>
        </h1>
        {/* <p className={homestyles["about5"]}>
          Currently, am an intern at <span style={{ color: "#0175a3" }}><a href="https://itcentral.ng/" className={homestyles["itlink"]}>iT Central NG</a> </span>
        </p> */}
        <p className={homestyles["about6"]} onMouseEnter={textEnter} onMouseLeave={textLeave}>
        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
I make meaningful and delightful digital products that create an equilibrium
between user needs and business goals.        </p>
      </div>
    </div>
  );
}

export default Home;
