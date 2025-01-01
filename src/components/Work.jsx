import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Work = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div class='education1' id="education">
      <h1 className='heading'>About</h1>
      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <span>Hi, I am Nikhil Arbune<br></br>

An enthusiastic individual who enjoys learning and experimenting with new fields and technology. I'm an meritocratic with a creative mind and a compassionate heart that is motivated to achieving my goals.

Since my HSC 12 th Summer Breaks, I have been coding.For me, coding is an art.It 's fantastic, and now I get to plan as well as code. It' s fascinating to me, and I 've had a lot of fun with it.

I fight for my rights and myself, as well as supporting and motivating others to do the same.I 'm not a pessimist who sees the worst in everything; instead, I' m an optimist who looks for answers and ways out of difficult situations.</span>
         </div >
      </div> 
    </div>
  )
}

export default Work