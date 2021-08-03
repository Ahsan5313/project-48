import React from 'react'

const Footer = () =>{

    return (

        <div>
            
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 ">
                           <div className='footer_address'>
                               <div className="footer_pic">
                                   <img src="" alt="" />
                               </div>
                               <h2>Follow </h2>
                               <div className="social_media">
                               <i class="fab fa-facebook"></i>
                               <i class="fab fa-twitter"></i>
                               <i class="fab fa-instagram"></i>
                               <i class="fab fa-youtube"></i>
                               </div>
                               <div className="footer_address">
                                   <h2>Address</h2>
                                   <p>1234 Street Name</p>
                                   <p>City, AA 99999</p>
                               </div>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="open__time">
                                <h2>Opening Hours</h2>
                            </div>
                            <div className="open_time_list">
                                <p>Monday &emsp; &ensp; 11:00 - 18:00</p>
                                <p>Tuesday &emsp; &ensp; 11:00 - 18:00</p>
                                <p>Wednesday &emsp; &ensp; 11:00 - 18:00</p>
                                <p>Thursday &emsp; &ensp; 11:00 - 18:00</p>
                                <p>Friday &emsp; &ensp; 11:00 - 18:00</p>
                                <p>Saturday &emsp; &ensp; 11:00 - 18:00</p>
                                <p>Sunday &emsp; &ensp; Closed</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact_us">
                                <h2>Contact Us</h2>
                            </div>
                            <form >
                                <div className="form-group">
                                    <input type="text" placeholder='Name' className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder='Phone' className='form-control' />
                                </div>
                                <div className="form-group">
                                    <textarea name="" className='form-control' placeholder='Message' id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="form_btn">
                                    <button type='button'>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Footer;