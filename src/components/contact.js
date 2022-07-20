import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo1.jpg';
import logo1 from '../images/logo3.jpg';

class Contact extends Component{
    render(){
        return (
            <>
                <div className='nav'>
                    <div className='logo'>
                        <img src={logo} alt='logo'/>
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
                    <h2>Contact <span>Us</span></h2>
                </div>

                <div className='contact'>
                    <form>
                    <h1>How can we help</h1>
                        <div className='contact-first'>
                            <input type='text' placeholder='FirstName' required/>
                            <input type='text' placeholder='LastName' required/>
                            <input type='email' placeholder='Your Email' required/>
                        </div>
                        <div className='message'>
                            <textarea placeholder='Your Message' required></textarea>
                        </div>
                        <input type='submit'/>
                    </form>
                </div>

                <div className='footer'>
                    <div className='footer__left'>
                        <img src={logo1} alt='logo' width='70'/>
                    </div>
                    <div className='footer__centre'>
                        <h1>Contact Us:</h1>
                        <h2>Destiven Merchant LLC</h2>
                        <ul>
                            <li>Avenue 2 Kenyatta Rd (Off-Thika Rd)</li>
                            <li>Nairobi</li>
                            <li>+1 (515) 854-8458 | (254) 715-657-003</li>
                            <li>stephen@destivenmerchants.com</li>
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

export default Contact; 