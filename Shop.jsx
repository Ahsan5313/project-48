import React from  'react'

const Shop = () =>{

    return(

        <div className='shop'>
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <div className="shop__bg__img">
                           <h2 data-aos="fade-down" data-aos-duration="1000">Free Delivery With</h2>
                           <h1 data-aos="fade-down-right" data-aos-duration="1000">PIZZA OF THE DAY</h1>
                           <h2 data-aos="fade-down-left" data-aos-duration="1000">Only 8.99 USD</h2>
                           <button data-aos="fade-up" data-aos-duration="1000" type='button' className='btn_shop'>call now</button>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Shop;