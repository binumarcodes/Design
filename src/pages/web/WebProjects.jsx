import React from 'react'
import webstyles from "./WebProjects.module.css"
import Arrow from "../../assets/Arrow.png"
import Web3 from "../../assets/web3.png"
import Web4 from "../../assets/web4.png"
import Web5 from "../../assets/web5.png"


function WebProjects() {

  const handleEcommerce = () => {
    window.open("https://www.figma.com/design/3dwWl360aQh6OfnRVjh285/E-Commerce-Mobile-App?node-id=0-1&t=c61k7vlS22o0qzRc-1", "_blank")
  }

  const handleFurniro = () => {
    window.open("https://www.figma.com/design/xmbCUfXbFs8ZFcqlyn5lst/Furniro-Design?node-id=1-3&t=2QR836Vc5aYaCOge-1", "_blank")
  }

  return (
    <div className={webstyles["container"]}>
      <div className={webstyles["card"]}>
        <p className={webstyles["heading"]}>Look at how i also craft and shape some <span style={{ textDecoration: "wavy"}}>Web and Mobile</span> apps </p>
            <div  className={webstyles["sub-title"]}>
              {/* <p className={webstyles["title"]}>Play with Figma</p> */}
              <img src="../src/assets/me.png" alt="" className={webstyles.meImage} />
            </div>
        <div className={webstyles["arrow-container"]}>
          <img src={Arrow} alt="Arrow" className={webstyles["arrow"]} />
        </div>
      </div>
      
    <div className={webstyles["card2"]}>
    <p className={webstyles["title2"]}>Fruits and Vegetables Shopping Web Design</p>
    <p className={webstyles["title3"]}>Shopery</p>
    <button className={webstyles["skill-btn"]} onClick={handleFurniro}>Learn More</button>

    <div className={webstyles["image-container"]}>
      <img src={Web5} alt="Arrow" className={webstyles["web-img"]} />
      </div>
    </div>

    <div className={webstyles["card2"]}>
    <p className={webstyles["title2"]}>Nigerian E-Commerce Mobile App</p>
    <p className={webstyles["title3"]}>BrandMe Shop</p>
    <button className={webstyles["skill-btn"]} onClick={handleEcommerce}>Learn More</button>

    <div className={webstyles["image-container"]}>
      <img src={Web4} alt="Arrow" className={webstyles["web-img"]} />
      </div>
    </div>
      
    <div className={webstyles["card2"]}>
    <p className={webstyles["title2"]}>Furniture Web App Design</p>
    <p className={webstyles["title3"]}>Furniro</p>
    <button className={webstyles["skill-btn"]} onClick={handleFurniro}>Learn More</button>

    <div className={webstyles["image-container"]}>
      <img src={Web3} alt="Arrow" className={webstyles["web-img"]} />
      </div>
    </div>
      
  
    </div>
  )
}

export default WebProjects
