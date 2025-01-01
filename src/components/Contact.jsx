import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const {theme} = useTheme();
  return (
    <div className={`contact ${theme?"cool3":"warm"}`} id="contact">
        <div className="first">
        <h2>Available for select opportunities</h2>
        <p>Have an exciting project you need help with?
        Send me an email or contact me via instant message!</p>
        </div>
        <div className='second'>
            <a href="mailto:nikhilarbune11@gmail.com"><span>nikhilarbune11@gmail.com</span></a>
            <a href="https://www.linkedin.com/in/nikhilarbune"><p>LinkedIn</p></a>
            <a href="https://github.com/nikhilarbune"><p>Github</p></a>
           
           
        </div>
    </div>
  )
}

export default Contact