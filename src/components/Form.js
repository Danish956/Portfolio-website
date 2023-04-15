import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <inpu type="text"></inpu>
            
            
            <label>Messege</label>
            <textarea rows="6" placeholder="Type Your Messege Here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form