import React from 'react'








const Navbar = () =>{

    return(
   


           <div>
              


             <nav class="navbar navbar-expand-lg navbar-light ">
               <div className="container">
               <a class="navbar-brand" href="#">Meastro <span>Pizza</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" >shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" >news</a>
                    </li>
                    <li class="nav-item">
                        <a  class="nav-link " href="#" >contact</a>
                    </li>
                    </ul>
                </div>
               </div>
                </nav>


        

           </div>
           
     
          
      
    )
}

export default Navbar;