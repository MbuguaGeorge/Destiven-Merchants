import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo1 from '../images/logo7.png';
import home from '../images/home.png';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import ReactGA from 'react-ga';
import analyticsEventTracker from './analytics';

function Contact (){

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [cred, setCred] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const gaTracker = analyticsEventTracker('contact us page')

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://destivenmerchants.herokuapp.com/mail', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cred)
        }).then(
            res => {
                console.log(res)
                alert('Thank you for your feedback')
                return navigate('/', {replace: true})
            }
        ).catch(
            err => console.log(err)
        )
    }

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
                <h2>Contact <span style={{marginLeft: '0'}}></span></h2>
            </div>
            </div>

            <div className='contact' id='contact'>
                <form onSubmit={handleSubmit}>
                    <h1>Get In Touch</h1>
                    <div className='contact-first'>
                        <input type='text' placeholder='Name' required
                            value={cred.name}
                            onChange={(e) => setCred(prevState => ({
                                ...prevState, name: e.target.value
                            }))}
                        />
                        <input type='email' placeholder='Your Email' required
                            value={cred.email}
                            onChange={(e) => setCred(prevState => ({
                                ...prevState, email: e.target.value
                            }))}
                        />
                    </div>
                    <div className='message'>
                        <textarea placeholder='Your Message' required
                            value={cred.message}
                            onChange={(e) => setCred(prevState => ({
                                ...prevState, message: e.target.value
                            }))}
                        ></textarea>
                    </div>
                    <input type='submit' value='SEND' onClick={() => gaTracker('send message')}/>
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
                                <h3>stephen@destivenmerchants.com</h3>
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
                    <ul>
                        <li><a href="https://twitter.com/DestivenM"><img src={twitter} alt='twitter' style={{width: '30px'}}/></a></li>
                        <li><a href="https://www.linkedin.com/in/stephen-ruigu-m-01849623b/"><img src={linkedin} alt='linkedin' style={{width: '30px'}}/></a></li>
                    </ul>
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

export default Contact;