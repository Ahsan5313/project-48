import React from 'react'

//importing navbar at here
import Navbar from './Navbar.jsx'



const Header = () =>{

    return(

        <div className='banner'>
            <Navbar/>
         <div className="banner__content">
             <div className="container">
                <div className="banner__text">
                <h3>Pizza Delivery</h3>
                 <h1>MEASTRO PIZZINNI</h1>
                 <p  data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor, sit amet 
                     consectetur adipisicing elit. 
                     Numquam officia labore voluptatibus
                      nihil </p>
                      <button type='button' className=' btn__order'>Order Now</button>
                </div>
             </div>
         </div>
         
              
        </div>
    )
}

export default Header;