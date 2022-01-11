import React from 'react'
import {} from '../App.css'
import {} from  '../styles/button.scss'
export default function Header() {
    return ( 

        <div className='navBar'>
            
            <li>

            <div className='title'>
                Faxter.
            </div>
            </li>
         
         <li>
         <div className='navListItems'>
             
             <li><a href='#'>Products</a></li>
                <li><a href='#'>Download&nbsp;&nbsp;<sub class='sub'>2</sub></a></li>
                <li><a href='#'>Enterprices</a></li>
                <li>
              <div class='dropdown'>
             
         Resources  &nbsp;<i class="arrow down"></i>
              
              <div class='dropdown-item'>
                  <h4><a href='#'>Hooks</a></h4>
                  <h4><a href='#'>Cookies</a></h4>
                  <h4><a href='#'>Tutorials</a></h4>
              </div>
              </div>
              </li>
              
                     
              <li><a href='#'><div class='signin'>Sign in</div></a></li>


               <li> <button class='button'>Sign up</button>


              
              
              </li>
              
              
                
            
              
                

            </div>
         </li>
       
      
        </div>

        
    )
}
