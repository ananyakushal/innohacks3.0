import React from 'react'
import "../src/css/intro.css"
import innohackslogo from "./Assets/innohacks-removebg-preview.png";

function Intro() {
  return (
    <div>
      <section id="intro">
    <div className="intro-container wow fadeIn">
      {/* <h1 className="mb-4 pb-0">The Annual<br/><span>Marketing</span> Conference</h1>
      <p className="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p> */}
      <img className='innohackslogo' src={innohackslogo} alt="" />
      {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video"
        data-autoplay="true"></a> */}
      <a href="#about" className="about-btn scrollto">About The Event</a>
    </div>
  </section>
    </div>
  )
}

export default Intro
