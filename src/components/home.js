import React, {Component} from 'react';
import logo from '../images/logo3.png';

class Home extends Component{
    render(){
        return (
            <>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>

                <div className='hero-div'>
                    <div className='hero'>
                        <h2>Grow <span>& Scale</span></h2>
                    </div>
                </div>

                <div className='nav'>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>

                <div className='about__page'>
                    <div className='about'>
                        <h1>ABOUT</h1>
                        <h2>We're a passionate team of creative, innovative, digital professionals.</h2>
                    </div>
                    <div className='company__values'>
                        <div className='company__values1'>
                            <div className='origin'>
                                <h1>ORIGIN</h1>
                                <h2>Evolving As An Agency Since 2010.</h2>
                                <h3>Our agency has strived to be at the cutting edge of digital since 2010.</h3>
                            </div>
                            <div className='vision'>
                                <h1>VISION</h1>
                                <h2>Evolving As An Agency Since 2010.</h2>
                                <h3>Our agency has strived to be at the cutting edge of digital since 2010.</h3>
                            </div>
                        </div>
                        <div className='company__values2'>
                            <div className='mission'>
                                <h1>MISSION</h1>
                                <h2>Evolving As An Agency Since 2010.</h2>
                                <h3>Our agency has strived to be at the cutting edge of digital since 2010.</h3>
                            </div>
                            <div className='values'>
                                <h1>VALUES</h1>
                                <h2>Evolving As An Agency Since 2010.</h2>
                                <h3>Our agency has strived to be at the cutting edge of digital since 2010.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <div className='footer__left'>
                        <img src={logo} alt='logo' width='70'/>
                    </div>
                    <div className='footer__centre'>
                        <h1>Contact:</h1>
                        <h2>Destiven Merchant Inc</h2>
                        <ul>
                            <li>Avenue 2 Kenyatta Rd (Off-Thika Rd)</li>
                            <li>Nairobi</li>
                            <li>+1 (515) 854-8458 | (254) 715-657-003</li>
                        </ul>
                    </div>
                    <div className='footer__right'>
                        <h1>Service Locations:</h1>
                        <ul>
                            <li>USA</li>
                            <li>United Kingdom</li>
                            <li>Canada</li>
                            <li>Australia</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Home; 