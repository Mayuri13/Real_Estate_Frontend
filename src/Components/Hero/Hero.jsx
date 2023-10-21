import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">

            {/* left-side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                  <div className="orange-circle"/>
                    <h1>
                        Discover <br />
                        Most Suitable <br />
                        Property
                    </h1>
                </div>

                <div className="flexColStart hero-des">
                    <span>Find a variety of property that suits you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="search-bar">
                    {/* <HiLocationMarker color="var" */}
                </div>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero