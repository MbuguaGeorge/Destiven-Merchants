import React, {Component} from 'react';

class Home extends Component{
    render(){
        return (
            <>
                <div className='logo'>
                    <nav>
                        <h1>Kristinmark<span>digital.</span></h1>
                    </nav>
                </div>

                <div className='hero'>
                    <h5>Helping brands and retailers</h5>
                    <h2>Start <span>Grow</span></h2>
                    <h3><span>Scale</span></h3>
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
                        <h1>Kristinmark<span>digital.</span></h1>
                        <ul>
                            <li>Fb. /</li>
                            <li>Tw. /</li>
                            <li>Lk.</li>
                        </ul>
                    </div>
                    <div className='footer__centre'>
                        <h1>Address:</h1>
                        <h2>Kristin Mark Digital LTD.</h2>
                        <ul>
                            <li>2 Clifton Moor Business Park</li>
                            <li>James Nicholson</li>
                            <li>United Kingdom</li>
                        </ul>
                    </div>
                    <div className='footer__right'>
                        <h1>Service Locations:</h1>
                        <ul>
                            <li>Kenya</li>
                            <li>Rwanda</li>
                            <li>Egypt</li>
                            <li>Nigeria</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Home; 