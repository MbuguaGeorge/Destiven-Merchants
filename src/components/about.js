import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo4.png';
import logo1 from '../images/logo7.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

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
                        <p>Destiven Merchants is a creative agency that provides innovative management and marketing initiatives to Shopify stores. We are a small group of web developers, Virtual assistants, and SEO consultants looking to help stores to achieve their goals. We are result oriented and always aspire to provide quality services to our customers through our team of professionals. </p>
                    </div>
                    <div className='about__section'>
                        <h1>Why Destiven <span>Merchants</span>?</h1>
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
                        <ol>
                            <li>
                                <img src={img4} alt='img4' />
                                <h2>Innovation & Creativity</h2>
                            </li>
                        </ol>
                    </div>
                    <div className='values'>
                        <div className='mission'>
                        <h3>Mission</h3>
                            <p>To provide the best customer results possible and deliver the WOW! Factor through our services.</p>
                        </div>
                        <div className='vision'>
                        <h3>Vision</h3>
                            <p>To provide innovative and effective integrated brand marketing optimization solutions to help our clients grow their businesses and realize their goals.	</p>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <div className='footer__left'>
                        <img src={logo1} alt='logo' width='120'/>
                    </div>
                    <div className='footer__centre'>
                        <h1>Contact Us:</h1>
                        <h2>Destiven Merchant LLC</h2>
                        <ul>
                            <li>Avenue 2 Kenyatta Rd (Off-Thika Rd)</li>
                            <li>Nairobi</li>
                            <li>+1 (515) 854-8458 | (254) 715-657-003</li>
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