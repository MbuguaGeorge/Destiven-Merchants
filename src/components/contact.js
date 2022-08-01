import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo4.png';
import logo1 from '../images/logo7.png';
import home from '../images/home.png';
import mail from '../images/mail.png';
import phone from '../images/phone.png';

class Contact extends Component{
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
                    <h2>Contact <span style={{marginLeft: '0'}}>Us</span></h2>
                </div>

                <div className='contact' id='contact'>
                    <form>
                        <h1>Get In Touch</h1>
                        <div className='contact-first'>
                            <input type='text' placeholder='Name' required/>
                            <input type='email' placeholder='Your Email' required/>
                        </div>
                        <div className='message'>
                            <textarea placeholder='Your Message' required></textarea>
                        </div>
                        <input type='submit' value='SEND'/>
                    </form>
                    <div className='contact__dets'>
                        <ul>
                            <li>
                                <img src={home} alt='address'/>
                                <div className='dets'>
                                    <h3>Address</h3>    
                                    <p>Avenue 2 Kenyatta Rd (Off-Thika Rd)</p>
                                </div>
                            </li>
                            <li>
                                <img src={phone} alt='phone'/>
                                <div className='dets'>
                                    <h3>Call us</h3>
                                    <p>(254) 715-657-003</p>
                                </div>
                            </li>
                            <li>
                                <img src={mail} alt='mail'/>
                                <div className='dets'>
                                    <h3>info@destivenmerchants.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
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

export default Contact; 