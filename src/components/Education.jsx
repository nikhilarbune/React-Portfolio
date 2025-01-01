import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Education() {
  const {theme} = useTheme();
  return (
    <div class='education1' id="education">
      <h1 className='heading'>My Education</h1>
      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <p>Sadguru Gadage Maharaj College,Karad </p>
           <span>BCA (Bachelor of Computer Applications)</span>
         </div >
         <div className="second">
          <p>2022-25</p>
          <span>Karad,Maharastra</span>
          </div>
      </div>
      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <p>Swami Ramanand Vidyalaya and Junior College,Ramanandnagar</p>
           <span>HSC (Higher Secondary Certificate) </span>
         </div >
         <div className="second">
          <p>2020-22</p>
          <span > Maharashtra</span>
          </div>
      </div>

      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <p>Chh Shivaji Vidyalaya , Dudhondi </p>
           <span> SSC( Secondary School Certificate) </span>
         </div >
         <div className="second">
          <p>2020</p>
          <span >Dudhondi, Maharashtra</span>
          </div>
      </div>
    </div>
  )
}

export default Education