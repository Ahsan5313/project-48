import React from 'react'

const About = ()  => {

    return (

        <div className='about'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about__content">
                            <h3 data-aos="fade-down" data-aos-duration="1000">About Us </h3>

                           <div  data-aos="flip-left" data-aos-duration="1000">
                           <h2 >Welcome To</h2>
                           </div>
                           
                           <div  data-aos="zoom-in-down" data-aos-duration="1000">

                              <h1>meastro pizzini</h1>
                           </div>

                            <p data-aos="slide-right" data-aos-duration="1000">Lorem, ipsum dolor sit amet consectetur
                                 adipisicing elit. Autem quis aliquam 
                                 vel veritatis debitis natus cupiditate 
                                 qui officia sapiente consectetur.</p>

                                 <button data-aos="fade-up" data-aos-duration="1000" type='button' className='about_btn'>Read more</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img_content"data-aos="slide-left" data-aos-duration="1000">
                            <img src="../Components/image/pizza2.jpg" className='img-fluid rounded' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;