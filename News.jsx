import React from 'react'
import CountUp from 'react-countup';

export default function News() {
    return (
        <div>
            
            <section id="projectWork">
        <div class="projectHeading">
          <h3 data-aos="slide-left" data-aos-duration="1000">More than 2000 website created</h3>
        </div>
        <div class="projectBackground ">
          <div class="container">
        <div class="row">         
          <div class="col-lg-3">
            <h1 className='count'>

            <CountUp
            start={0}
            end={1500}
            duration={2.75}
         
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
            >
            {({ countUpRef, start }) => (
                <div>
                <span ref={countUpRef} />
                <button data-aos="fade-down-right" data-aos-duration="1000" onClick={start}>Start</button>
                </div>
            )}
            </CountUp>

            </h1>
            <p>design
            </p>
          </div>
          <div class="col-lg-3">
            <h1 class="count">
               
            <CountUp
            start={0}
            end={1500}
            duration={2.75}
         
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
            >
            {({ countUpRef, start }) => (
                <div>
                <span ref={countUpRef} />
                <button  data-aos="fade-down-right" data-aos-duration="1000" onClick={start}>Start</button>
                </div>
            )}
            </CountUp>
            </h1>
            <p>development</p>
          </div>
          <div class="col-lg-3">
            <h1 class="count">

                 <CountUp
                 
                 start={0}
                 end={3000}
                 duration = {2.75}

                 onEnd= { () => console.log('Ended! 👏')}
                 onStart = { () => console.log('Started! 💨')}
                 
                 >
               
                  {({countUpRef, start}) => (

                      <div>

                             <span ref={countUpRef}/>
                             <button  data-aos="fade-down-left" data-aos-duration="1000" onClick={start}>Start</button>

                      </div>
                  )}
                    

                 </CountUp>

            </h1>
            <p>wordpress</p>
          </div>
          <div class="col-lg-3">
            <h1 class="count">

                <CountUp 

                 start={0}
                 end= {3500}
                 duration={2.75}

                 onEnd = { () => console.log('Ended')}
                 onStart = { () => console.log('Started')}
                
                >

                { ({countUpRef, start}) => (

                    <div>

                     <span ref={countUpRef}/>
                     <button  data-aos="fade-down-left" data-aos-duration="1000" onClick={start}>Start</button>

                    </div>
                )}


                </CountUp>

            </h1>
            <p>installation </p>
          </div>
        </div>
       </div>
      </div>
    </section>



        </div>
       
    )
}

