import React from 'react'
import img from '../images/profile.png'
import {} from '../styles/button.scss'
import homegif from '../images/home.gif'
export default function Body() {
    return (
        <div class="Body">



<li><div class='Col1'>


    <div class='m1'>Speed</div>
    <div class='m1'>up your</div>
   <h1><div class='m2'>Workflow.</div></h1> 
    <div class='m3'>
<li><div>
    <img src={img} alt="profile" class='profile'/>
    </div></li>

<li><div class='comments'>
    
    "We understand how difficult it is for one to find good and homely living space. we provide you with"
    </div></li>
 
    </div>
    <div class='buttons'>
    <li> <button class='button'>TRY FOR FREE</button> </li>
  
    <li> <button class='learnmore'>LEARN MORE</button></li>
    </div>
</div>
</li>
<li><div>
    <img src={homegif} alt='Home gif'  class='Col2'></img>
    </div></li>
        </div>
    )
}
