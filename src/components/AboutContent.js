import { Link } from "react-router-dom"
import "./AboutContentStyles.css"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>iam a full stack web developer </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>


        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://www.trio.dev/hubfs/Imported_Blog_Media/dbc631c76245baabe08c31d016a94de2-2.jpg" className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src="https://images.surferseo.art/ab2827f1-a2ea-469f-874f-de59c41af595.jpeg" className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent