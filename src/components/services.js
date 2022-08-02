import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import logo1 from '../images/logo7.png';
import hero5 from '../images/hero5.jpg';
import hero6 from '../images/hero6.jpg';
import hero7 from '../images/hero7.jpg';
import hero8 from '../images/hero8.jpg';
import hero9 from '../images/banner3.jpg';
import hero10 from '../images/hero10.jpg';

function Service (){

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return (
        <>
        <div className='nav'>
            <div className='logo'>
                <Link style={{textDecoration: 'None'}} to='/'><img src={logo1} alt='logo'/></Link>
            </div>
            <button 
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
                className="hamburger">
{/* icon from heroicons.com */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            <div className={isNavExpanded ? "nav__menu expanded" : "nav__menu"}>
                <ul>
                    <Link style={{textDecoration: 'None'}}  to="/"><li>Home</li></Link>
                    <Link style={{textDecoration: 'None'}}  to="/blog"><li>Blog</li></Link>
                    <Link style={{textDecoration: 'None'}}  to="/services"><li>Services</li></Link>
                    <Link style={{textDecoration: 'None'}}  to="/about"><li>About Us</li></Link>
                    <Link style={{textDecoration: 'None'}}  to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </div>

            <div className='hero-div'>
            <div className='overlay'></div>
            <div className='hero'>
                <h2>Services</h2>
            </div>
            </div>

            <div className='home' style={{backgroundColor: 'white'}}>
                <div className='last__section' id='services'>
                    <h1>What we offer.</h1>
                    <div className='border'></div>
                    <div className='section1'>
                        <img src={hero5} alt='hero5' />
                        <div className='col desc'>
                            <h2>Shopify Store Management</h2>
                            <p>Shopify ecommerce brands have a tremendous opportunity to grow and scale their business to their full potential by leveraging virtual assistance. Gone are the days of having to upload, import, edit, and research products yourself. We have you covered for this. You should focus on how to boost your brand awareness. Leave the essential tasks to us.</p>
                        </div>
                    </div>
                    <div className='section1'>
                        <div className='col'>
                            <img src={hero6} alt='hero6'/>
                        </div>
                        <div className='col desc col-left'>
                            <h2>SEO for Shopify</h2>
                            <p>Search engines are bridges between a brand and a customer. You must optimize your products to rank higher on major search engines. Before ranking, you need to understand what problem a consumer is trying to solve and offer the right solution. 
                            SEO and SEM allow brands to present the best product to the client at the top of their search results. 
                            </p>
                        </div>
                    </div>
                    <div className='section1'>
                        <img src={hero7} alt='hero5' />
                        <div className='col desc'>
                            <h2>Content for Shopify</h2>
                            <p>Content is at the heart of modern marketing. Everything a brand does or plans to do revolves around content. The major obstacle for Shopify merchants is the ability to produce quality content at scale – we have it covered. Through creation and storytelling, our content teams work on written formats that are SEO optimized. Whatever brand you’re presenting, you’ll have content to serve your consumers.</p>
                        </div>
                    </div>
                    <div className='section1'>
                        <div className='col'>
                            <img src={hero8} alt='hero6'/>
                        </div>
                        <div className='col desc col-left'>
                            <h2>SEO for Shopify</h2>
                            <p>Search engines are bridges between a brand and a customer. You must optimize your products to rank higher on major search engines. Before ranking, you need to understand what problem a consumer is trying to solve and offer the right solution. 
                            SEO and SEM allow brands to present the best product to the client at the top of their search results. 
                            </p>
                        </div>
                    </div>
                    <div className='section1'>
                        <img src={hero9} alt='hero5' />
                        <div className='col desc'>
                            <h2>Website Development</h2>
                            <p>We offer Custom Software Development on the web and mobile for Small businesses and Enterprises. We offer full-cycle Software Development services delivering innovative solutions in Product Development, Technology Consulting, and IT Outsourcing.</p>
                        </div>
                    </div>
                    <div className='section1'>
                        <div className='col'>
                            <img src={hero10} alt='hero6'/>
                        </div>
                        <div className='col desc col-left'>
                            <h2>Data Entry</h2>
                            <p>In every sense of the word, businesses today is Data- Driven. Data is streaming in at breakneck speed and from every direction. The old way of handling this was setting up a great staff, lots of office space, and lots of hardware and software to store and access that information. Outsourcing your data entry could be vital to being more competitive in your business sector. Thinking Outsource Partner For Data Entry Services? We offer data mining, entry, cleansing, and processing. Image data or product data – We’ve you covered.     
                            </p>
                        </div>
                    </div>
                    <div className='but'>
                        <HashLink smooth to='/contact#contact'><button>CONTACT US</button></HashLink>
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

export default Service; 