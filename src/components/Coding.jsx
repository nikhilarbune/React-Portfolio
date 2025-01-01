import React from 'react'
import cf from "../img/codeforces.png"
import cc from "../img/cc.jpg"
import gfg from "../img/gfg.jpg"
import leetcode from "../img/leetcode.jpg"
import codingNinja from "../img/codingNinja.jpeg"
const Coding = () => {
  return (
    <div className='coding' id="profiles">
         <h1 className='heading'>My Coding Profiles</h1>
         <div className='profiles'>
            <div className='item'><a href="https://.codeforces.com//code_with_nik"><img src={cf}/></a></div>
            <div className='item'><a href="https://www.codechef.com//code_with_nik"><img src={cc}/></a></div>
            <div className='item'><a href="https://leetcode.com/codewithnik/"><img src={leetcode}/></a></div>
            <div className='item'><a href="https://www.codingninjas.com/studio/profile/1b9212a8-00ec-4bc9"><img src={codingNinja}/></a></div>
            <div className='item'><a href="https://auth.geeksforgeeks.org/user/6z4ryio2ejpzys01hvtmlfrm"><img src={gfg}/></a></div>
         </div>
    </div>
  )
}

export default Coding