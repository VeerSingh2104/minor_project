import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-content'>
            <h1>Welcome to Legal Help Provider</h1>
            <p>We are dedicated to providing accessible and compassionate legal services. Our mission is to empower individuals with the legal support they need to navigate life’s challenges.</p>
        </div>
        <button className='cta-button'>Get Started!</button>
        {/* <div className='hero-image'>
            <img src="" alt="" />
        </div> */}
    </section>
  )
}

export default Hero
