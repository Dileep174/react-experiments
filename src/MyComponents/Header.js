import React from 'react'
import "./css/Brands.css"
import image from "./images/1.jpg"; 
import { FaHeartbeat, FaUserCircle, FaHandRock, FaSitemap, FaRunning, FaMale  } from "react-icons/fa";

export default function Header() {
  return (
    <>
    <div className="container-fluid hero">
      <img src='' alt='bg' className='bg-white'/>
      <div className="row bg-gray">
          <div className="col-sm">
            <div className="container">
              <div className='row'>
                <div className='col-sm'>
                <div className="row main-row">
                <div className=' bg-img'></div>
                    <div className="col-sm circle-img">
                      <img src="img/ccc.jpg" alt="circle" className="circle"/>
                    </div>
                    <div className="col-sm middle">
                        <h1>NYC Sport Club</h1>
                        <p>Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas.
                            Lobortis elementum nibh tellus molestie nunc non. Aliquet bibendum</p>
                        <button type="button" value="Learn more">Learn more</button>
                    </div>
                  </div>
              <div className="row main-row cards">
                <div className="col-sm card1">
                  <h2>Fitness</h2>

                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-sm card2">
                  <h2>Cycling</h2>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-sm card3">
                  <h2>Total Body</h2>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="row">
                  <div className="col-sm middle">
                      <h2 className="fitness">Fitness classes</h2>
                      <i>Gyms, Day Spas, Trainers</i>
                      <p>In this day in age, keeping fit has become one of the top activities for someone to do in their free time.</p>
                      <button type="button" value="Learn more">Learn more</button>
                  </div>
                  <div className="col-sm">
                      <img src="img/2.png" alt="helth" className='fitness'/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm">
                      <div className="row">
                      <div className="row second-img" style={{ backgroundImage:`url(${image})`}}></div>
                          <div className="col-sm Member">
                              <h2>Membership Options</h2>
                              <p>All Memberships include full access to our amenities, pools,<br/> fitness classNamees & much more id est laborum.</p>        
                          </div>    
                          <div className="row">
                          <div className="col-sm card4">
                           <h2>Health</h2>
                           <p>Unlimited classNamees
                              Daily Locker
                              Fitness Evaluation
                              Guest Passes
                              1 PT Sessionure</p>
                              <button type="button" className="btn">Inquire for rates</button>
                          </div>
                          <div className="col-sm card4">
                              <h2>Health Plus</h2>
                              <p>Health's Features +
                                  Laundry Service
                                  Overnight Locker
                                  Guest Passes
                                  3 PT Sessions</p>
                                 <button type="button" className="btn">Inquire for rates</button>
                          </div>
                          <div className="col-sm card4">
                              <h2>Other</h2>
                              <p>Corporate
                                  Neighborhood
                                  Student
                                  Guest Passes
                                  Spousal</p><br/>
                                  <button type="button" className="btn">Learn more</button>
                          </div>
                        </div>
                      </div>
                        <div className="row">
                          <div className="col-sm">
                            <img src="img/1.png" alt="img"/>
                          </div>
                        </div>
                  </div>
                </div>
                <div className="row main-row">
                  <div className="col-sm middle text-center">
                    <h2>Weight loss guaranteed!</h2>
                    <p>Many people find it difficult to find a balanced relationship between diet and exercise.   </p>
                    <button type="button">VIEW ALL PROGRAMS</button>
                  </div>
                  <div className="col-sm">
                  <img src="img/3.jpg" alt="img" className='weight-loss'/>
                  </div>
                </div>
                <div className="row main-row">
                  <div className="col-sm m-5">
                    <h1>Just Train</h1>
                    <p>Change Your Body, Change Your Mindset. Our gym has<br/> everything you need to get results. Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </div>
      </div>

      <div className="container overlap">
          <div className="row">
            <div className="col-sm third-card">
                <FaHeartbeat style={{color: 'red', fontSize: '50px', margin: `20px 0px`}}/>
                <h2>FITNESS</h2>
            </div>
            <div className="col-sm third-card">
                <FaUserCircle style={{color: 'red', fontSize: '50px', margin: `20px 0px`}}/>
                <h2>ABOUT US</h2>
            </div>
            <div className="col-sm third-card">
                <FaHandRock style={{color: 'red', fontSize: '50px', margin: `20px 0px`}}/>
                <h2>BOXING</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm third-card">
                <FaSitemap style={{color: 'red', fontSize: '50px', margin: `20px 0px`}}/>
                <h2>SERVICES</h2>
            </div>
            <div className="col-sm third-card">
                <FaRunning style={{color: 'red', fontSize: '50px', margin: `20px 0px`}}/>
                <h2>CARDIO</h2>
            </div>
            <div className="col-sm third-card">
                <FaMale style={{color: 'red', fontSize: '50px', margin: `20px 0px`}}/>
                <h2>WEIGHT LOSS</h2>
            </div>
          </div>
          

          <div className="row">
            <div className="col-sm">
              <img src='img/4.jpg' alt='img' className='img-center'/>
            </div>
          </div>

          <div className="row">
            <div className="col">
            <img src='img/5.jpg' alt='img' className='img-center1'/>
            </div>
            <div className="col">
            <img src='img/6.jpg' alt='img' className='img-center1'/>
            </div>
            <div className="col">
            <img src='img/7.jpg' alt='img' className='img-center1'/>
            </div>
          </div>
      </div>

      <div className="container-fluid bg-danger">
        <div className="container">
            <div className="row text-light">
              <div className="col-sm">
                  <p>In pellentesque massa placerat duis ultricies. Mattis molestie a iaculis at.<br/> Lorem ipsum dolor sit amet consectetur. Et ligula ullamcorper malesuada<br/> proin libero nunc consequat interdum varius orci nulla.</p>
                  <button type='button'>Learn more</button>
                  <h2 className='my-2'>Benefits of sport training</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm forth-card">
                  <h2>Agility</h2>
                  <p>Sem integer vitae justo eget magna fermentum iaculis eu. Erat pellentesque adipiscing commodo elit at imperdiet dui. Nec sagittis aliquam malesuada bibendum.</p>
                  <button type='button'>Learn more</button>
              </div>
              <div className="col-sm forth-card">
                  <h2>Strength</h2>
                  <p>Sem integer vitae justo eget magna fermentum iaculis eu. Erat pellentesque adipiscing commodo elit at imperdiet dui. Nec sagittis aliquam malesuada bibendum.</p>
                  <button type='button'>Learn more</button>
              </div>
              <div className="col-sm forth-card">
                  <h2>Quickness</h2>
                  <p>Sem integer vitae justo eget magna fermentum iaculis eu. Erat pellentesque adipiscing commodo elit at imperdiet dui. Nec sagittis aliquam malesuada bibendum.</p>
                  <button type='button'>Learn more</button>
              </div>
              <div className="col-sm forth-card">
                  <h2>Power</h2>
                  <p>Sem integer vitae justo eget magna fermentum iaculis eu. Erat pellentesque adipiscing commodo elit at imperdiet dui. Nec sagittis aliquam malesuada bibendum.</p>
                  <button type='button'>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      

        <div className="container ">
              <div className="row last-row">
                <div className="col-sm m-5">
                    <h2>How We Help People</h2>
                    <i>With serious savings, a seamless online application, and unique community benefits,<br/> our members have a lot to say about our loans!</i>
                </div>
              </div>
              <div className="row">
                <div className="col-sm fifth-card">
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.</p>
                </div>
                <div className="col-sm fifth-card">
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.</p>
                </div>
                <div className="col-sm fifth-card">
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm">
                <img src='img/ccc.jpg' alt='ccc' className='img-center2'/>
                <span>Paul Smith</span>
                </div>
                <div className="col-sm">
                <img src='img/ccc.jpg' alt='ccc' className='img-center2'/>
                <span>Sam Perry</span>
                </div>
                <div className="col-sm">
                <img src='img/ccc.jpg' alt='ccc' className='img-center2'/>
                <span>Marry Hudson</span>
                </div>
              </div>

        </div>
    </div>

  
  </>
    
  )
}
