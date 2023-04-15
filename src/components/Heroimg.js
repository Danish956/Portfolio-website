import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {IntroImg} alt="da"/>

        </div>

        <div className="content">
            <p>Hey! My Name is Danish </p>
            <h1>Full Stack Web Developer</h1>
            <div>
                <Link to="/project" className="btn">projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
           
        </div>
        
    </div>
  )
}

export default Heroimg


  

