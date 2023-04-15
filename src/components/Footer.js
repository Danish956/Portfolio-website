import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Ambala, Haryana 133207</p>
                        <p>India</p>

                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                +918873377903
                    </h4>
               
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                mddanish122001@gmail.com
                    </h4>
               
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>hey iam danish, currently pursuing Btec from CSE. Iam tech enthusiatic and love to explore and learn new technology</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer