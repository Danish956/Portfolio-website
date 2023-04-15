import { NavLink } from "react-router-dom"
import "./WorkCardStyles.css"
import React from 'react'

const  WorkCard = () => {
  return (
    <div className="Work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src="https://inprogrammer.com/wp-content/uploads/2021/02/Bank-Management.png" alt="img"/>
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>this is paragraph</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default  WorkCard