import React from 'react'
import experiencestyle from "./Experience.module.css"

function Experience() {
  return (
    <div className={experiencestyle["container"]}>
      <div>
        <h2 className={experiencestyle["heading"]}>Working Experience</h2>
        
        <div className={experiencestyle["cards-container"]}>
        <div className={experiencestyle["cards"]}>
            <div className={experiencestyle["card-2"]}>
            <img src="../src/assets/experience.png" alt="" className={experiencestyle["card"]} />
            <img src="../src/assets/experience.png" alt="" className={experiencestyle["card"]} />
            </div>
            <div className={experiencestyle["card-2"]}>
            <img src="../src/assets/experience.png" alt="" className={experiencestyle["card"]} />
            <img src="../src/assets/experience.png" alt="" className={experiencestyle["card"]} />
            </div>
        </div>
        </div>
      <img src="../src/assets/Gradient.png" className={experiencestyle["gradient"]} />
      </div>
    </div>
  )
}

export default Experience
