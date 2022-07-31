import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo4.png';
import logo1 from '../images/logo7.png';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import hero4 from '../images/hero4.jpg';
import hero5 from '../images/hero5.jpg';
import hero6 from '../images/hero6.jpg';

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
                        <Link style={{textDecoration: 'None'}}  to="/services"><li>Services</li></Link>
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
                            <h1>You have a vision, We have a way to get you there.</h1>
                            <p style={{paddingBottom: '20px'}}>A premier Shopify agency specializing in management and ecommerce marketing solutions for global Shopify brands.</p>
                            <p>We specialize in delivering Shopify ecommerce solutions that outperform our client's expectations across <span>Shopify management</span>, and <span> Shopify marketing strategy.</span></p>
                            <button>Let's Talk</button>
                        </div>
                    </div>
                    <div className='mid__section'>
                        <h1>What do you want to achieve?</h1>
                        <div className='border'></div>
                        <p style={{paddingBottom: '40px', fontWeight: '600'}}>Before we start, we ask one simple question: What do you want to achieve?</p>
                        <p style={{paddingBottom: '20px'}}>Whether it's SEO for Shopify, content marketing for Shopify, social media for Shopify, or management for Shopify store, we start by asking, “What do you want to achieve?” This way, we get to the core of what our clients do and use the information as the foundation to work on your Shopify store and grow your brand.</p>
                        <p>Whether you're an established fortune 500 brand or a new brand store does not matter. Our approach to ecommerce management and marketing strategies combines science and human behavior into a result-oriented system. You'll grow and scale while maintaining a solid ROI.</p>
                    </div>
                    <div className='last__section'>
                        <h1>What we do.</h1>
                        <div className='border'></div>
                        <div className='section1'>
                            <img src={hero5} alt='hero5' />
                            <div className='desc'>
                                <h2>Shopify Store Management</h2>
                                <p>Shopify ecommerce brands have a tremendous opportunity to grow and scale their business to their full potential by leveraging virtual assistance. Gone are the days of having to upload, import, edit, and research products yourself. We have you covered for this. You should focus on how to boost your brand awareness. Leave the essential tasks to us.</p>
                            </div>
                        </div>
                        <div className='section2'>
                            <div className='desc'>
                                <h2>SEO for Shopify</h2>
                                <p>Search engines are bridges between a brand and a customer. You must optimize your products to rank higher on major search engines. Before ranking, you need to understand what problem a consumer is trying to solve and offer the right solution. 
                                SEO and SEM allow brands to present the best product to the client at the top of their search results. 
                                </p>
                            </div>
                            <img src={hero6} alt='hero6'/>
                        </div>
                        <div className='but'>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div className='explore__section'>
                        <h2>Why you should consider Hiring a Virtual Assistant</h2>
                        <p>The best this about hiring a Shopify virtual assistant is: that you save a lot of operational costs, from salaries, allowances, and other employee benefits. Virtual Assistant assists you to grow and scale the scope of your Shopify brand without compromising on the quality aspect. Our Virtual assistants will help in providing comprehensive customer support and perform on-page and off-page SEO activities for your online business.</p>
                    </div>
                    <div className='final__section'>
                        <div className='overlay'></div>
                        <div className='desc'>
                            <h2>We do business, not just optimizing & managing your Shopify brand.</h2>
                            <p>Whether you're looking for managing, optimizing, scaling, and growing, we are ready to provide that for You.</p>
                        </div>
                        <div className='button'>
                            <button>Get in Touch</button>
                        </div>
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

export default Home; 