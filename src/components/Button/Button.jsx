import React from 'react';
import buttonstyles from "./Button.module.css";

function Button({ btnText }) {
  return (
    <div>
      <a href="mailto:abdulrahmanbinumar178@gmail.com">
        <button className={buttonstyles["connect-btn"]}>{btnText}</button>
      </a>
    </div>
  );
}

export default Button;
