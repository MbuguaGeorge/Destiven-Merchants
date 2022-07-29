import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo4.png';
import logo1 from '../images/logo7.png';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import hero4 from '../images/hero4.jpg';
import hero5 from '../images/hero5.jpg';
import hero6 from '../images/hero6.jpg';
import hero7 from '../images/hero7.jpg';

class Home extends Component{
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
                        <h2>Grow</h2>
                        <div className='and'>
                    </div>
                    <span>Scale</span>
                </div>

                <div className='home'>
                    <div className='home__section'>
                        <div className='hero1'>
                            <img src={hero4} alt='hero2' />
                        </div>
                        <div className='hero2'>
                            <img src={hero2} alt='hero3' />
                        </div>
                        <div className='hero3'>
                            <img src={hero3} alt='hero3' />
                        </div>
                        <div className='home__desc'>
                            <h1>Thousands of customers trust our company</h1>
                            <p style={{paddingBottom: '20px'}}>A premier Shopify agency specializing in management and ecommerce marketing solutions for global Shopify brands.</p>
                            <p>We specialize in delivering Shopify ecommerce solutions that outperform our client's expectations across <span>Shopify management</span>, and <span> Shopify marketing strategy.</span></p>
                            <button>Let's Talk</button>
                        </div>
                    </div>
                    <div className='mid__section'>

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

export default Home; 