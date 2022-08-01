import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo4.png';
import logo1 from '../images/logo7.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.png';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';

class About extends Component{
    render(){
        return (
            <>
                <div className='nav'>
                    <div className='logo'>
                        <Link style={{textDecoration: 'None'}} to='/'><img src={logo} alt='logo'/></Link>
                    </div>
                    <ul>
                        <Link style={{textDecoration: 'None'}}  to="/"><li>Home</li></Link>
                        
                        <Link style={{textDecoration: 'None'}}  to="/blog"><li>Blog</li></Link>
                        <Link style={{textDecoration: 'None'}}  to="/services"><li>Services</li></Link>
                        <Link style={{textDecoration: 'None'}}  to="/about"><li>About Us</li></Link>
                        <Link style={{textDecoration: 'None'}}  to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>

                <div className='hero-div'></div>
                <div className='hero'>
                    <h2>About <span style={{marginLeft: '0'}}>Us</span></h2>
                </div>

                <div className='about'>
                    <div className='about__us'>
                    <h5>Our <span>Story</span></h5>
                        <p>Destiven Merchants provides services that will help you run your business more efficiently. We're a team of experienced, knowledgeable, dedicated web developers, virtual assistants, and SEO and marketing consultants. We're on a mission to empower Shopify stores with an online presence worldwide to deliver top-notch results.</p>
                        <p> 
                        By understanding customer needs, we advise businesses on the best way to address them. As a creative agency, our sole purpose is to help Shopify business level their efficiency and performance and deliver exceptional customer experience.
                        </p>   
                        <p>There are a few reasons why you should get us to help your business:</p>
                        <ol>
                            <li>Your productivity will increase drastically - We'll handle the administrative work, customer support, and data entry, and you'll be able to spend more time working on tasks that are important to your business. </li>
                            <li>Value for your money - You can expect service consistency and reliability 24/7. We'll walk hand-in-hand, and you'll always know what needs to be done and when. </li>
                            <li>Experts - you'll have a custom team at your disposal. You won't have to research complicated solutions or troubleshoot issues. We'll take care of everything for you!</li>
                        </ol>
                    </div>
                    <div className='about__section'>
                        <h1>Why Destiven <span>Merchants</span>?</h1>
                        <div className='border'></div>
                        <ul>
                            <li>
                                <img src={img1} alt='img1' />
                                <h2>Dedicated Team</h2>
                            </li>
                            <li>
                                <img src={img2} alt='img2' />
                                <h2>True Partners</h2>
                            </li>
                            <li>
                                <img src={img3} alt='img3' />
                                <h2>Innovation & Creativity</h2>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src={img4} alt='img4' />
                                <h2>Respect for the client's needs,
                                </h2> <h2>Culture and Identity</h2>
                            </li>
                            <li>
                                <img src={img6} alt='img6' />
                                <h2>Integrity</h2>
                            </li>
                            <li>
                                <img src={img7} alt='img7' />
                                <h2>Accountability</h2>
                            </li>
                        </ul>
                    </div>
                    <div className='values'>
                        <h3>Mission & Vision</h3>
                        <div className='border'></div>
                        <p>To provide the best customer results possible and deliver the WOW! Factor through our services.</p>
                        <p>
                        To provide innovative and effective integrated brand marketing optimization solutions to help our clients grow their businesses and realize their goals.</p>
                        <p style={{marginTop: '50px'}} >
                        With us at your disposal, you will focus on running your business instead of managing it daily. So what are you waiting for? Get in touch with us.  
                        </p>
                    </div>
                    <div className='testimonials'>
                        <h4>Testimonials</h4>
                        <div className='border'></div>
                        <div className='cont'>
                            <div className='container'>
                                <div className='testimony'>
                                    <img src={pic2} alt='avatar'/>
                                    <p>Great work as always. Stephen is a great seller to work with. Very professional. Really goes above what is expected. </p>
                                </div>
                                <div className='name'>
                                    <h5>Catherine</h5>
                                    <span>United Kingdom</span>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='testimony'>
                                    <img src={pic3} alt='avatar'/>
                                    <p>Excellent service all around. Great communication!</p>
                                </div>
                                <div className='name'>
                                    <h5>Eve Myren</h5>
                                    <span>United States</span>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='testimony'>
                                    <img src={pic1} alt='avatar'/>
                                    <p>Excellent! </p>
                                </div>
                                <div className='name'>
                                    <h5>Deb</h5>
                                    <span>United Kingdom</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='verify'>
                        <h3>Verified by:</h3>
                        <ul>
                            <li>
                                <img src={img8} alt='img8' />
                            </li>
                            <li>
                                <img src={img9} alt='img9' />
                            </li>
                            <li>
                                <img src={img10} alt='img10' />
                            </li>
                            <li>
                                <img src={img11} alt='img11' />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='footer'>
                    <div className='footer__left'>
                        <img src={logo1} alt='logo' width='120'/>
                        <p>Get a dedicated Shopify Virtual Assistant to do your tasks in the best way possible.</p>
                    </div>
                    <div className='mid__footer'>
                        <h1>Navigation</h1>
                        <ul>
                        <Link style={{textDecoration: 'None', color: 'crimson'}}  to="/"><li>Home</li></Link>
                        <Link style={{textDecoration: 'None', color: 'crimson'}}  to="/blog"><li>Blog</li></Link>
                        <Link style={{textDecoration: 'None', color: 'crimson'}}  to="/services"><li>Services</li></Link>
                        <Link style={{textDecoration: 'None', color: 'crimson'}}  to="/about"><li>About Us</li></Link>
                        <Link style={{textDecoration: 'None', color: 'crimson'}}  to="/contact"><li>Contact</li></Link>
                        </ul>
                    </div>
                    <div className='footer__centre'>
                        <h1>Contact Us:</h1>
                        <h2>Destiven Merchant LLC</h2>
                        <ul>
                            <li>Avenue 2 Kenyatta Rd (Off-Thika Rd)</li>
                            <li>Nairobi</li>
                            <li>(254) 715-657-003</li>
                            <li>info@destivenmerchants.com</li>
                        </ul>
                    </div>
                    <div className='footer__right'>
                        <h1>Service Locations:</h1>
                        <ul>
                            <li>USA</li>
                            <li>United Kingdom</li>
                            <li>Canada</li>
                            <li>Australia</li>
                            <li>Netherlands</li>
                            <li>Germany</li>
                        </ul>
                    </div>
                </div>
                
                <div className='watermark'>
                    Copyright © 2022 destiven merchant llc
                </div>
            </>
        )
    }
}

export default About;