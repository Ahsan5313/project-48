import React from 'react'

const Contact = () =>{

    return(

        <div>
           

          <section id="contactUs">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="contact__from__content">
                              <h3> Quick Delivery</h3>
                              <h2  data-aos="fade-right" data-aos-duration="1000">Order a</h2>
                              <h2>pizza now</h2>
                              <p  data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet, 
                                  consectetur adipisicing elit. 
                                  Nisi quibusdam doloribus voluptates 
                                  minima enim minus?</p>                               
                          </div>

                          <div className="row">
                              <div className="col-md-6">
                                  <div className="input_fill">
                                      <input data-aos="fade-down-left" data-aos-duration="1000" type="text" className='from-control  ' placeholder='First Name' />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="input_fill">
                                      <input data-aos="fade-down-right" data-aos-duration="1000" type="text" className='from-control' placeholder='Last Name' />
                                  </div>
                              </div>
                          </div> 

                          <div className="col-md-12">
                                  <div className="input_fill__full">
                                      <input type="text" className='from-control' placeholder='Enter Street Address ' />
                                  </div>
                              </div>

                          

                          <div className="row mt-2">
                              <div className="col-md-6">
                                  <div className="input_fill">
                                      <input data-aos="fade-down-left" data-aos-duration="1000" type="text" className='from-control  ' placeholder='Apartment/Room' />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="input_fill">
                                      <input data-aos="fade-down-right" data-aos-duration="1000" type="text" className='from-control' placeholder='Phone' />
                                  </div>
                              </div>
                          </div> 

                          <div className="col-md-12">
                                  <div className="input_fill__full">
                                      <input type="text" className='from-control' placeholder='Pizza Types '/>
                                  </div>
                              </div>

                          <div className="row mt-2">
                              <div className="col-md-6">
                                  <div className="input_fill">
                                      <input data-aos="fade-down-left" data-aos-duration="1000" type="text" className='from-control  ' placeholder='Number' />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="input_fill">
                                      <input data-aos="fade-down-right" data-aos-duration="1000"  type="text" className='from-control' placeholder='Size' />
                                  </div>
                              </div>
                          </div> 
                          
                          <button data-aos="fade-up" data-aos-duration="1000" type='button' className='from__btn'>quick Delivery</button>
                   
                      </div>  
         

                      <div className="col-md-6">
                          <div  data-aos="flip-left" data-aos-duration="1000" className="contact_img">
                              <img src="" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>


        </div>
    )

}
export default Contact;