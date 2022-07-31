import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo1 from '../images/logo7.png';
import logo from '../images/logo4.png';

import hero7 from '../images/hero7.jpg';


class Service extends Component{
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
                    <h2>Services</h2>
                </div>

                <div className='service'>
                    <h1>Our Exclusive Services</h1>
                    <h1>We Offer For You</h1>
                    <div className='offer'>
                        <ul>
                            <li>
                                <img src={hero7} alt='hero7'/>
                                <div className='desc'>
                                    <h2>Content For Shopify</h2>
                                    <p>Content is at the heart of modern marketing. Everything a brand does or plans to do revolves around content. The major obstacle for Shopify merchants is the ability to produce quality content at scale - we have it covered. Through creation and storytelling, our content teams work on written formats that are SEO optimized. Whatever brand you're presenting, you'll have content to serve your consumers.</p>
                                </div>
                            </li>
                            <li>
                                <img src={hero7} alt='hero7'/>
                                <div className='desc'>
                                    <h2>Content For Shopify</h2>
                                    <p>Content is at the heart of modern marketing. Everything a brand does or plans to do revolves around content. The major obstacle for Shopify merchants is the ability to produce quality content at scale - we have it covered. Through creation and storytelling, our content teams work on written formats that are SEO optimized. Whatever brand you're presenting, you'll have content to serve your consumers.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='footer'>
                    <div className='footer__left'>
                    <img src={logo1} alt='logo' width='120'/>
                    <p>With us at your disposal, you will focus on running your business instead of managing it daily. So what are you waiting for? Get in touch with us.</p>
                    </div>
                    <div className='mid__footer'>
                        <h1>Navigation</h1>
                        <ul>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>About Us</li>
                            <li>Contact</li>
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

export default Service; 